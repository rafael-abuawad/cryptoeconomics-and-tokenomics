import ape
from ape import project


def test_max_tokens(factory):
    assert factory.maxTokens() == 8


def test_create_one_token(factory, sender, token_values):
    name, symbol, supply = token_values
    factory.create(name, symbol, supply, sender=sender)


def test_create_token_id(factory, sender, token_values):
    name, symbol, supply = token_values
    factory.create(name, symbol, supply, sender=sender)
    id = factory.token_count(sender) - 1
    assert id == 0


def test_create_multiple_tokens(factory, users, token_values):
    name, symbol, supply = token_values
    max_tokens = factory.maxTokens()
    for user in users:
        for _ in range(max_tokens):
            factory.create(name, symbol, supply, sender=user)


def test_create_reverts_after_limit(factory, users, token_values):
    name, symbol, supply = token_values
    max_tokens = factory.maxTokens()
    for user in users:
        for _ in range(max_tokens):
            factory.create(name, symbol, supply, sender=user)

    for user in users:
        for _ in range(max_tokens):
            with ape.reverts():
                factory.create(name, symbol, supply, sender=user)


def test_create_multiple_tokens_correct_values(factory, users, token_values):
    name, symbol, supply = token_values
    max_tokens = factory.maxTokens()
    user = users[0]

    for user in users:
        for _ in range(max_tokens):
            factory.create(name, symbol, supply, sender=user)

    for user in users:
        for i in range(max_tokens):
            token_addr = factory.tokens(user, i)
            token = project.Token.at(token_addr)

            assert token.name() == name
            assert token.symbol() == symbol
            assert token.decimals() == 18
            assert token.totalSupply() == int(supply * 1e18)
            assert token.balanceOf(user) == int(supply * 1e18)
