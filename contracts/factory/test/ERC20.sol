pragma solidity =0.5.16;

import '../WardenswapERC20.sol';

contract ERC20 is WardenswapERC20 {
    constructor(uint _totalSupply) public {
        _mint(msg.sender, _totalSupply);
    }
}
