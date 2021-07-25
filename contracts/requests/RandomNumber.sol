// SPDX-License-Identifier: MIT

pragma solidity >=0.7.0 <0.9.0;

import "witnet-ethereum-bridge/contracts/Request.sol";

// The bytecode of the RandomNumber request that will be sent to Witnet
contract RandomNumberRequest is Request {
  constructor () Request(hex"0a7e08c4d0f587061258124c7777772e72616e646f6d6e756d6265726170692e636f6d2f6170692f76312e302f72616e646f6d7265646469746e756d6265723f6d696e3d313030266d61783d3130303026636f756e743d311a0882187782186561301a0d0a0908051205fa3fc000001003220d0a0908051205fa3fc00000100310c0843d186420e80728333080c8afa025") { }
}
