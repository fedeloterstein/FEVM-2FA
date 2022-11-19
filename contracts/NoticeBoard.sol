// SPDX-License-Identifier: MIT
pragma solidity 0.8.17;

contract NoticeBoard {
  
  string notice;
  mapping(string => address) noticeBy;

  function setNotice(string memory _notice) public {
    notice = _notice;
    noticeBy[_notice] = msg.sender;
  }

  function getNotice() public view returns (string memory) {
    return notice;
  }

  function getUserByNotice(string memory _notice) public view returns (address) {
    return noticeBy[_notice];
  }
  
}