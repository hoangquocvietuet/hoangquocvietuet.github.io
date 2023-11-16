---
layout: blog-post
title: "DTQG #2 Editorial"
date: '2023-11-16'
aside: false
sidebar: false
---

# Bài 1

Giả sử dãy có phần tử bằng $0$. Ta luôn chọn nó đầu tiên vì luôn khiến đáp án tốt hơn. Nếu dãy có phần tử min là $x$, phần tử này sẽ đóng góp vào đáp án $a[x] * (n - 2)$. Ta coi như là giảm dãy đi $a_x$ đơn vị, lúc này xuất hiện thêm các phần tử $0$, ta chỉ việc xoá chúng đi và làm lại bước trên.

Đáp án cũng được cộng với $min(a[x - 1], a[x + 1]) - a[x]$ (không xoá luôn mà có thể để sau này mới xoá $x$, chú ý: ta coi là dãy đang giảm đi $a[x]$ đơn vị).

Tóm tắt các bước:
- Tìm phần tử nhỏ nhất là $x$.
- Cộng vào đáp án cuối cùng $a[x] * (n - 2)$ với $n$ là số giá trị còn lại.
- Cộng vào đáp án cuối cùng $min(a[x - 1], a[x + 1]) - a[x]$.
- Giảm cả dãy đi $a[x]$, xoá các phần tử $0$.

Có thể cài đặt bằng Segment tree, không cần phải thực hiện thao tác xoá mà chỉ cần giảm trên Segtree.

# Bài 2

Đáp án luôn $\le 7$ vì một số chỉ có tối đa $6$ ước nguyên tố khác nhau. Ta tính mảng $dp(i, j)$ là số cách chọn $j$ phần tử sao cho có $gcd = i$.

Gọi số lượng số chia hết cho $j$ là $k$. Số cách chọn $i$ phần tử từ $k$ phần tử là $C_{i}^{k}$. Sau khi khởi tạo $dp(i, j) = C_{k}^{i}$, ta chỉ cần trừ hết đi $dp(i \times 2, j)$, $dp(i \times 3, j)$, ...


# Bài 3

Ta chặt nhị phân đáp án, giả sử xét giá trị $x$, ta cần xem có tồn tại cách chọn sao cho số lượng phần tử $\le x$ có $\ge k$ hay không. Ta sẽ coi những phần tử $a_i \le x$ là $a_i = 1$, những phần tử $a_i > x$ là $a_i = 0$. Ta nghĩ đến $dp$ để chọn được tổng $\ge k$.

Gọi $dp(i, j)$ là tổng nếu đã xét $i$ phần tử đầu và đã chọn tối đa $j$ đoạn. Công thức:

$dp(i, j) = max(dp(i - 1, j), dp(i, j - 1))$.

Nếu trong các phần tử $1$, $2$, ..., $i + 1$, ta có đoạn $[L, R]$ với $R$ lớn nhất thì ta sẽ ưu tiên chọn đoạn $[L, R]$ này để mở rộng ra nhiều nhất, tổng được mở rộng ra đúng bằng $a_j$ với $j$ từ $i + 1$ đến $R$. Do đó $dp(nxt(i), j + 1) = max(dp(i, j) + sum(nxt(i)) - sum(i))$ với $nxt(i)$ là $R$ lớn nhất sao cho $L \le i + 1$ và $sum$ là mảng tổng tiền tố.

Cách làm trên là đúng vì mỗi lần ta chỉ thêm các phần tử chưa được xét, dù một phần tử bị nhiều đoạn đè lên.