// SPDX-License-Identifier: GPL-3.0

pragma solidity 0.6.12;

import "../node_modules/witnet-ethereum-bridge/contracts/UsingWitnet.sol";

interface IRandomNumberGen is UsingWitnet {
  function requestUpdate() external payable;
  function completeUpdate() external;
}