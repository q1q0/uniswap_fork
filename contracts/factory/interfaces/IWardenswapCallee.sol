pragma solidity >=0.5.0;

interface IWardenswapCallee {
    function wardenswapCall(address sender, uint amount0, uint amount1, bytes calldata data) external;
}
