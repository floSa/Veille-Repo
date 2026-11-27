# angristan/openvpn-install

> Shell script that installs and manages an OpenVPN server on your own Linux server.

## The problem
Setting up an OpenVPN VPN by hand (PKI, firewall, DNS, clients) is long and risky.

## What it actually does
Installs OpenVPN, generates certificates with Easy-RSA, configures the firewall (firewalld, nftables, iptables), DNS (including Unbound) and IPv4/IPv6. Adding, revoking and renewing clients, .ovpn files, JSON output. Internet access by default; local network and client-to-client disabled. Fingerprint mode (OpenVPN 2.6+).

## How it is wired
```mermaid
flowchart LR
  Script["openvpn-install.sh"] --> Net["Linux OS & Network"]
  Script --> PKI["Easy-RSA Module"]
  PKI --> Gen["Client Config Generator (.ovpn)"]
  Gen --> Clients["Phone / Laptop / Computer"]
  Clients --> Net
```

## Trying it
```bash
curl -O https://raw.githubusercontent.com/angristan/openvpn-install/master/openvpn-install.sh
chmod +x openvpn-install.sh
./openvpn-install.sh interactive
./openvpn-install.sh client add alice
```

## Cost and gotchas
Free; a VPS or home server at your expense (Vultr, Hetzner, Digital Ocean suggested). Root, TUN module, systemd, tested on amd64 only. The CLI interface may change: pin a commit.

## What it is not
Not protection against a state-level adversary (the FAQ says so). Not multi-platform on the server side.

## Alternatives
The README points to wireguard-install and to Nyr's script (older distributions).

## For you
Worth watching: handy for private access to a GPU server or an internal network; WireGuard is simpler if TCP is not needed.
