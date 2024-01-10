// https://leetcode.com/problems/add-two-numbers/

// Input: l1 = [2,4,3], l2 = [5,6,4]
// Output: [7,0,8]
// Explanation: 342 + 465 = 807.

// Runtime: 69 ms, faster than 98.77% of JavaScript online submissions for Add Two Numbers.
// Memory Usage: 46.9 MB, less than 82.35% of JavaScript online submissions for Add Two Numbers.

function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

const ll1 = new ListNode(2,
    new ListNode(4,
        new ListNode(3, null)
    )
);

const ll2 = new ListNode(5,
    new ListNode(6,
        new ListNode(4, null)
    )
);

// 9, 5, 6, 0, 0
// ^
// 4, 7, 2, 7, 6
// ^
// sum = 13
// addFlag = true
var addTwoNumbers = function (l1, l2) {
    const addToTail = (head, val) => {
        if (head === null) {
            head = new ListNode(val, null);
        } else {
            let cur = head;
            while (cur.next !== null) {
                cur = cur.next;
            }
            cur.next = new ListNode(val, null);
        }

        return head;
    }

    let cur1 = l1;
    let cur2 = l2;
    let nextRad = 0;
    let result = null;

    while (cur1 !== null || cur2 !== null || nextRad !== 0) {
        let val = (cur1?.val ?? 0) + (cur2?.val ?? 0) + nextRad;

        if (val >= 10) {
            val -= 10;
            nextRad = 1;
        } else {
            nextRad = 0;
        }

        result = addToTail(result, val);

        cur1 = cur1?.next ? cur1.next : null;
        cur2 = cur2?.next ? cur2.next : null;
    }

    return result;
};

console.log(addTwoNumbers(ll1, ll2));
