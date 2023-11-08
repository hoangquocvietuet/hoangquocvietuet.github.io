---
layout: post
published: true
title: editorial educational training round 01
subtitle: 'Nhì VOI đơn giản lắm, chỉ cần trượt TST là được'
date: 2022/07/15
tags: [CP]
---

## INCQUERIES

#### subtask 1: 

Bắt đầu tại $$i = l$$. Ta lặp đi lặp lại thao tác sau nếu $$i < r$$:
- Tìm phần tử $$j > i$$ nhỏ nhất sao cho $$a_j > a_i$$.
- Nếu $$j > r$$, ta coi như $$j = r + 1$$. Ta cần dùng phép biến đổi để biến các số $$a_{i + 1}, .., a_{j - 1}$$ bằng $$a_i$$. Số thao tác cần là: $$a_i \times (j - i - 1) - sum(i + 1, j - 1)$$. 
- Thay $$i = j$$. 

Thuật toán trên cho ta được kết quả của đoạn $$[l, r]$$ trong ĐPT là: $$O(r - l + 1)$$.

ĐPT: $$O(n \times q)$$.

#### subtask 2:

Chuẩn bị mảng $$f[i][j]$$ là phần tử thứ $$2^j$$ nếu nhảy từ $$i$$ như subtask 1. 

Tiếp theo ta dùng [binary lifting](https://codeforces.com/blog/entry/100826) để nhảy nhanh.

ĐPT: $$O(n \log(n))$$.

## LIS3

#### subtask 1:

Sinh ra tất cả các dãy và đếm số dãy thoả mãn. 

ĐPT: $$O(n^m)$$.

#### subtask 2:

Nhắc lại về thuật toán tìm dãy con tăng nghiêm ngặt dài nhất trong $$O(n \log n)$$.

Gọi $$f[i]$$ là dãy con tăng nghiêm ngặt dài nhất nếu xét $$i$$ phần tử đầu và dãy kết thúc tại vị trí $$i$$.

Ta duy trì mảng $$b[j]$$ là giá trị cuối cùng của dãy con tăng nghiêm ngặt độ dài $$j$$ tại thời điểm đang tính.

Nhận xét quan trọng: ta luôn có: $$b_1 < b_2 < b_3 < .. < b_n$$. Do đó ta có thể chặt nhị phân trên dãy $$b$$ này (lower_bound).

Quay trở lại bài toán, 

Mỗi trạng thái, ta cần duy trì 3 số $$b_1 < b_2 < b_3$$ để biết được LIS của dãy đang xây dựng và đảm bảo yêu cầu đề bài.

Gọi $$dp[i][j][h][k]$$ là số dãy nếu như ta chọn ra trong $$i$$ phần tử đầu và có $$b_1 = j, b_2 = h, b_3 = k$$.

Nếu tại vị trí $$i$$, ta thêm $$1 \le a_i \le m$$ vào dãy, ta cần xét các số $$j, h, k$$ để biết được dãy $$b$$ đang duy trì cập nhật ra sao.

Nếu $$j \ge a_i$$, dãy trở thành $$a_i, j, k$$.

Ngược lại, nếu $$h \ge a_i$$, dãy trở thành $$j, a_i, k$$. 

Ngược lại, nếu $$k \ge a_i$$, dãy trở thành $$j, h, a_i$$.

Từ đó ta cập nhật cho các $$dp[i + 1]$$.

ĐPT: $$O(n \times m^3)$$.

## MISSINGCOIN

#### subtask 1:

Ở mỗi bước, ta luôn duy trì tập $$S$$ là các phần tử có thể tạo ra nếu sử dụng các đồng xu đã xét. Nếu xét đến phần tử tiếp theo, mỗi giá trị trong $$S$$ sẽ được cộng thêm phần tử đó hoặc giữ nguyên.

Vì ta cần tìm giá trị nhỏ nhất không tạo được nên tập $$S$$ phải duy trì luôn là các số liên tiếp từ $$1$$. Giả sử có $$S$$ = $$[1, x]$$. Nếu thêm phần tử $$y$$, ta được đoạn $$[1, x] \cap [y, x + y]$$. Nếu $$y > x + 1$$, hiển nhiên ta không thể tao được phần tử $$x + 1$$. Ngược lại, ta mở rộng giới hạn $$x$$. Bên cạnh đó, phần tử đầu tiên được thêm luôn phải là $$1$$. Nhằm tối ưu, $$y$$ cũng phải được xét tăng dần.

ĐPT: $$O(n \log(n))$$ do chi phí `sort`.

#### subtask 2:

Thay vì sắp xếp $$a_i$$ tăng dần, ta nhóm $$a_i$$ theo bit $$1$$ lớn nhất. Ta xét các nhóm theo bit $$c$$ tăng dần. 

Giả sử: $$a_j$$ phần tử nhỏ nhất trong đoạn $$[l, r]$$ có bit $$c$$ là bit $$1$$ lớn nhất. Nhận xét: chỉ cần $$a_j \le x + 1$$ là đủ để `ăn` cả nhóm. 

Thật vậy, giả sử $$2^c = a_j \le x + 1$$. Số lớn nhất có bit $$c$$ lớn nhất là $$2^{c + 1} - 1$$. Xét:

$$x + 2^c \ge 2^{c + 1} - 1$$ 

$$\rightarrow x \ge 2^c - 1$$

$$\rightarrow x + 1 \ge 2^c$$

Vậy ta luôn ăn được nhóm có bit lớn nhất là c.

Để làm online, ta có thể cài `rmq` và `tổng tiền số`. Xét từng nhóm, ta cần chặt nhị phân để xem vị trí của hai đầu mút $$l, r$$.

[code làm online](https://ideone.com/lqiuyY).

ĐPT: $$O(n \log(n) \log(a))$$.

