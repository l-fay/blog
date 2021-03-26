---
title: LeetCode | 第二题两数相加
date: 2021-03-26 15:26:38
tags: [LeetCode, Java]
categories: 
  - [Java]
  - [LeetCode]
---
心血来潮，重新用Java做了下之前用Python做过的题。

<!-- more -->

[题目](https://leetcode-cn.com/problems/add-two-numbers/)

递归解法：

Solution：

```
class Solution {
    public ListNode addTwoNumbers(ListNode l1, ListNode l2) {
        if (l1 == null & l2 == null)
            return null;
        if (l1 == null)
            l1 = new ListNode(0);
        if (l2 == null)
            l2 = new ListNode(0);
        ListNode l3 = new ListNode((l1.val + l2.val) % 10, addTwoNumbers(l1.next, l2.next, l1.val + l2.val >= 10));
        return l3;
    }

    public ListNode addTwoNumbers(ListNode l1, ListNode l2, boolean i) {
        if (l1 == null & l2 == null & !i)
            return null;
        if (l1 == null)
            l1 = new ListNode(0);
        if (l2 == null)
            l2 = new ListNode(0);
        if (i)
            return new ListNode((l1.val + l2.val + 1) % 10, addTwoNumbers(l1.next, l2.next, l1.val + l2.val + 1 >= 10));
        else
            return new ListNode((l1.val + l2.val) % 10, addTwoNumbers(l1.next, l2.next, l1.val + l2.val >= 10));
    }
}
```

需要自己测试的还需要下边两个文件。

ListNode：

```
public class ListNode {
    int val;
    ListNode next;

    ListNode() {
    }

    ListNode(int val) {
        this.val = val;
    }

    ListNode(int val, ListNode next) {
        this.val = val;
        this.next = next;
    }
}
```

test：
```
public class test {
    public static void main(String[] args) {
        ListNode l1=new ListNode(9,new ListNode(9,new ListNode(9,new ListNode(9,new ListNode(9,new ListNode(9))))));
        ListNode l2=new ListNode(9,new ListNode(9,new ListNode(9,new ListNode(9))));
        Solution l=new Solution();
        ListNode l3=l.addTwoNumbers(l1,l2);
        while (l3!=null){
            System.out.println(l3.val);
            l3=l3.next;
        }
    }
}
```