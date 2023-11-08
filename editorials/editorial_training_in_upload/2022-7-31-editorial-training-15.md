---
layout: post
published: true
title: editorial training 15
subtitle: 'Cần cù bù thông minh'
date: 2022/07/31
tags: [CP]
---

## EQUATION

#### subtask 1:

Duyệt hai vòng $$x_1, x_2$$ và kiểm tra rằng buộc $$x_3$$.

ĐPT: $$O(m^2)$$.

#### subtask 2:

Ta đặt $$y_i = x_i - a_i$$, ta đưa bài toán về đếm số nghiệm không âm của phương trình $$y_1 + y_2 + ... + y_N = M$$.

Ta dùng bài toán đếm [chia kẹo euler](https://sites.google.com/site/nhatnguyendrgs/home/math/bai-toan-chia-keo-cua-euler) để tính nhanh.

ĐPT: $$O(m)$$.

#### subtask 3:

Gọi $$dp[i][j]$$ là số bộ $$i$$ số tạo ra tổng bằng $$j$$. 

Vì $$x_i$$ nằm trong khoảng $$[a_i, b_i]$$. Công thức: $$dp[i][j] = dp[i - 1][j - a_i] + dp[i - 1][j - a_i - 1] + ... + dp[i - 1][j - b_i]$$.

Từ đây ta có thể tối ưu bằng cách tính trước tổng tiền tố.

ĐPT: $$O(n \times m)$$.

#### subtask 4:

Gọi $$f[mask]$$ là đáp số nếu tất cả các vị trí $$i$$ là bit $$0$$ thoả mãn điều kiện $$x_i \ge a_i$$.

Nếu ta chỉ tính mỗi $$f[0]$$ như subtask 2 thì sẽ thừa những nghiệm có $$x_i > b_i$$.

Do đó ta nghĩ đến việc áp dụng bao hàm loại trừ để tính. Ta bổ sung điều kiện cho $$f[mask]$$: tất cả vị trí $$i$$ là bit $$1$$, ta cho điều kiện $$x_i > b_i$$ hay $$x_i >= b_i + 1$$. Sau đó việc đơn giản là dùng chia kẹo euler tính như subtask 2.

Đáp án: $$\sum_{mask}f[mask] - \sum_{state}f[state]$$ với $$mask$$ có chẵn bit bật và $$state$$ có lẻ bit bật.

[code](https://ideone.com/XuQJG7).

## MOLECULES

#### subtask 1:

Vì mọi $$a_i$$ bằng nhau nên ta duyệt xem lấy bao nhiêu số.

ĐPT: $$O(n)$$.

#### subtask 2:

Ta duyệt lấy bao nhiêu $$a_{min}$$ và bao nhiêu $$a_{max}$$.

ĐPT: $$O(n^2)$$.

#### subtask 3 + 4:

[DP knapsack](https://usaco.guide/gold/knapsack) cổ điển.

ĐPT: $$O(n \times r)$$.

#### subtask 5: 

Tối ưu knapsack bằng bitset.

ĐPT: $$O(\frac{n \times r}{32})$$.

#### subtask 6:

Dùng thuật toán tham lam. Ta chứng minh được nếu dãy $$a$$ được sắp xếp tăng dần, đáp số luôn là một đoạn liên tiếp. Thật vậy, giả sử tập hợp đáp án có $$k$$ phần tử. Ta bắt đầu $$k$$ phần tử nhỏ nhất. Giả sử đoạn hiện tại là $$[u, v]$$. Nếu tổng hiện tại thoả mãn thì ta in ra đáp án, nếu không ta bỏ phần tử $$u$$ ra, thêm phần tử $$v + 1$$. Vì $$sum < l$$ (đang không thoả mãn) và $$r - l \ge a_{v + 1} - a_u$$. Nên "bước nhảy" của ta không bao giờ cho $$sum > r$$. Do đó tại một thời điểm nào đó $$sum$$ sẽ nằm trong đoạn $$[l, r]$$.

Việc đơn giản cần làm là sắp xếp lại dãy và dùng hai con trỏ. Subtask 5 cũng có thể làm tham lam bằng cách cố định $$k$$. 

[code](https://ideone.com/eIon2f).

ĐPT: $$O(n \log(n))$$.

## PAINT

#### subtask 1:

Các vị trí `X` là những giao điểm của $$[0, c[0] - 1]$$ và $$[n - c[0], n - 1]$$. Còn lại là dấu `?`.

ĐPT: $$O(n)$$.

#### subtask 2:

Sinh tất cả các dãy và kiểm tra thoả mãn. 

ĐPT $$O(2^n \times n)$$.

#### subtask 3:

Ta duyệt từng vị trí và kiểm tra vị trí đó đặt được `X` và `_` không. 

Để kiểm tra, ta cứ lần lượt đặt `X` từ đầu. Nếu đoạn $$c_i$$ ô tiếp theo có màu trắng thì ta không đặt được. Nếu đang xét `X` tại ô $$c_i + 1$$ tiếp theo, ta cũng không đặt được (vì nó mở rộng ra thành $$c_i + 1$$ ô đen). Nếu ta đặt được $$k$$ đoạn thì thoả mãn (nếu ô đang xét không nằm trong đoạn nào thì ta tưởng tượng mình có thể dịch chuyển đoạn gần nhất để chứa nó).

[code](https://ideone.com/irg3OR).

ĐPT: $$O(n^3)$$.

#### subtask 4: bonus, có thể làm bằng greedy như subtask 1.

#### subtask 5 + 6: bonus, có thể làm bằng dp.

#### subtask 7:

Gọi $$dp[i][j][h] = 0 / 1$$ nếu xét $$i$$ ô đầu có thể đặt được $$j$$ đoạn và ô thứ $$i$$ là đen $$(h = 0)$$ hoặc trắng $$(h = 1)$$

Nếu ô thứ $$i$$ khác `X`, ta có $$dp[i][j][1] = dp[i - 1][j][1] \mid \mid dp[i - 1][j][0]$$.

Nếu ô thứ $$i$$ khác `_`, ta có $$dp[i][j][0] = dp[i - c[j]][j - 1][1]$$ và đoạn $$[i - c[i] + 1, i]$$ không có ô `_` nào.

Ta cũng chuẩn bị một mảng $$f[i][j][h]$$ với ý nghĩa tương tự nhưng là xét các ô $$[i, n]$$.

Tại vị trí $$i$$, nếu tồn tại $$j$$ sao cho $$dp[i][j][1] = true$$ và  $$f[i][k-j][1] = true$$ thì ta có thể đặt trắng. 

Tại vị trí $$i$$, nếu tồn tại $$j$$ sao cho $$dp[i][j][0] = true$$ và $$f[i+1][k-j][1] = true$$ thì ta có thể đặt đen vào đoạn $$[i - c[j] + 1, i]$$. Ta dùng trick tổng tiền tố để tăng biến đếm cả đoạn lên $$1$$.

Giờ công việc đơn giản là kiểm tra xem vị trí $$i$$ có đặt được đen hoặc trắng hoặc cả hai không.

[code](https://ideone.com/bhx6qZ).

ĐPT: $$O(n \times k)$$.