// SPDX-License-Identifier: MIT
pragma solidity ^0.8.23;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Permit.sol";

contract TeddyBearINU is ERC20, ERC20Permit {
    constructor() ERC20("Teddy Bear INU", "TBI") ERC20Permit("Teddy Bear INU") {
        _mint(msg.sender, 9000000210 * 10 ** decimals());
    }
}
