// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract AdvancedStorage {
  uint[] public ids;

  function add(uint id) public {
    ids.push(id);
  }

  function get(uint i) view public returns (uint) {
    return ids[i];
  }

  function getAll() view public returns (uint[] memory) {
    return ids;
  }

  function length() view public returns (uint) {
    return ids.length; 
  }
}
