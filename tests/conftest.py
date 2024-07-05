import pytest


@pytest.fixture(scope="module")
def sender(accounts):
    return accounts[0]


@pytest.fixture(scope="module")
def users(accounts):
    return accounts[1:]


@pytest.fixture(scope="module")
def token(project, sender):
    return project.Token.deploy(sender=sender)


@pytest.fixture(scope="module")
def factory(project, sender, token):
    return project.Factory.deploy(token, sender=sender)


@pytest.fixture(scope="module")
def token_values():
    name = "Test Token"
    symbol = "TT"
    supply = 1000
    return name, symbol, supply
