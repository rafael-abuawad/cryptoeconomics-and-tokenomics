from ape import project, accounts, networks

def main():
    ecosystem_name = networks.provider.network.ecosystem.name
    network_name = networks.provider.network.name
    network = f"{ecosystem_name}:{network_name}"

    if network == "fantom:testnet":
        sender = accounts.load("testnet-sender")
    else:
        sender = accounts.test_accounts[0]

    token = project.Token.deploy(sender=sender)
    project.Factory.deploy(token, sender=sender)