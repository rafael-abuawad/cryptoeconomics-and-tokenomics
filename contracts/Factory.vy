# pragma version >0.3.10

MAX_TOKENS: constant(uint8) = 8

interface Token:
    def initialize(_name: String[32], _symbol: String[32], _supply: uint256, _sender: address): nonpayable

tokens: public(HashMap[address, address[MAX_TOKENS]])
token_count: public(HashMap[address, uint8])
blueprint: public(address)

@deploy
def __init__(blueprint: address):
    self.blueprint = blueprint


@external
def create(_name: String[32], _symbol: String[32], _supply: uint256) -> address:
    token_count: uint8 = self.token_count[msg.sender]
    assert token_count <= MAX_TOKENS, "Factory: Max token count reached"
    self.token_count[msg.sender] += 1

    token_address: address = create_copy_of(self.blueprint)
    token: Token = Token(token_address)
    extcall token.initialize(_name, _symbol, _supply, msg.sender)
    
    self.tokens[msg.sender][token_count] = token_address
    return token_address


@external
@view
def maxTokens() -> uint8:
    return MAX_TOKENS
