# onevcat/Kingfisher

> **Remote image downloading and caching for Apple apps, in Swift, view layer included.**

## The problem

Showing a remote image in an iOS or macOS view means writing the `URLSession` request, the
decoding, the resizing, a memory cache, a disk cache with expiration, cancellation when a cell
is recycled, and a placeholder for the wait. Same code every time, same chances to get it wrong.

## What it actually does

Kingfisher downloads an image from a URL, stores it in both a memory cache and a disk cache,
and puts it in the view. The next call with the same URL is served from the cache.

The cache is hybrid across two layers, with configurable expiration date and size limit, plus
an opt-in async cache probe in `KingfisherManager` so the calling thread is not blocked on a
disk check. Downloads are cancelable and already-downloaded content is reused.

Image work goes through processors composed with the `|>` operator —
`DownsamplingImageProcessor`, `RoundCornerImageProcessor` — and the set is extensible, image
formats included. On the view side, `kf` extensions cover `UIImageView`, `NSImageView`,
`NSButton`, `UIButton`, `NSTextAttachment`, `WKInterfaceImage`, `TVMonogramView` and
`CPListItem`, with transition animation, placeholder and loading indicator.

Three ways to write the same thing: the `kf.setImage` extension, the chained `KF` builder, and
`KFImage` for SwiftUI — the README points out you move from `KF` to `KFImage` by changing the
name. The README also lists prefetching, Low Data Mode, Live Photo load and cache, and
readiness for Swift 6 and strict concurrency. Downloader, cache and processors are advertised
as usable independently.

## How it is wired

No code-derived diagram exists for this repository: the graph below is rebuilt from the README
alone, using the type names it mentions.

```mermaid
graph LR
  A[remote URL<br/>or local data] --> B[downloader<br/>URLSession]
  B --> C[KingfisherManager<br/>opt-in async cache probe]
  C --> D[memory cache]
  C --> E[disk cache<br/>expiration · size limit]
  C --> F[processors<br/>DownsamplingImageProcessor |> RoundCornerImageProcessor]
  F --> G[kf.setImage<br/>UIImageView · NSButton · CPListItem…]
  F --> H[KF builder<br/>chained]
  F --> I[KFImage<br/>SwiftUI]
  D --> C
  E --> C
```

## Trying it

The README documents no shell install command: installation goes through Xcode's UI
(File > Swift Packages > Add Package Dependency, URL `https://github.com/onevcat/Kingfisher.git`,
"Up to Next Major" with `8.0.0`), or by dropping a prebuilt `Kingfisher.xcframework` downloaded
from the release page. The only installable block copied from the README is the CocoaPods
Podfile:

```ruby
source 'https://github.com/CocoaPods/Specs.git'
platform :ios, '13.0'
use_frameworks!

target 'MyApp' do
  pod 'Kingfisher', '~> 8.0'
end
```

Then, in code, the simplest case exactly as the README writes it:

```swift
import Kingfisher

let url = URL(string: "https://example.com/image.png")
imageView.kf.setImage(with: url)
```

## Cost and gotchas

- **Free, MIT, no third-party service, no API key, no account.** Funding is GitHub Sponsors,
  with no crippled tier.
- **The real prerequisite is the platform**: Kingfisher 8.0 requires iOS 13+ / macOS 10.15+ /
  tvOS 13+ / watchOS 6+ / visionOS 1+ and Swift 5.9+; with SwiftUI the bar rises to iOS 14+ /
  macOS 11+. Version 7.0 goes one step lower (iOS 12+, Swift 5.0+). Outside Apple platforms,
  nothing to take.
- **One migration per major**: the README links 7.0 and 8.0 migration guides. Version bumps are
  not free.
- **The disk cache is a cost**: expiration and size limit are configurable, which means they
  must be configured. By default you store images on the user's device.
- **`cacheOriginalImage` doubles storage**: the README's advanced example keeps the
  high-resolution original *in addition to* the downsampled thumbnail, for the detail view.

## What it is not

- **Not a general-purpose image processing engine.** Processors serve the display path
  (downsampling, rounded corners); the author writes that he wants to keep the framework
  lightweight and focused on downloading and caching.
- **Not cross-platform.** No Android, web or server build: every extension listed is UIKit,
  AppKit, WatchKit, SwiftUI or CarPlay.
- **Not a CDN or a storage solution**: the library consumes URLs you give it, it neither hosts
  nor server-side optimizes them.

## Alternatives

| | When to pick it |
|---|---|
| **Juanpe/SkeletonView** | A catalogue neighbour, complementary rather than competing: it handles the on-screen waiting state (animated skeleton) where Kingfisher gives a static placeholder and an indicator. Take it alongside, not instead. |

The other supplied neighbours (`jpsim/Yams`, `GopeedLab/gopeed`, `bitwarden/ios`) share the
Swift language or the word "download" but not the subject: no other comparable alternative in
the catalogue, and the README names none.

## For you

Little overlap with a data / AI / MLOps routine: this is Apple client engineering, not
pipeline work. The one transferable idea is the hybrid memory + disk cache with expiration and
an async probe, worth re-reading when designing an inference or feature cache. Adopt without
hesitation if an iOS or macOS app is on the table, walk past otherwise.
