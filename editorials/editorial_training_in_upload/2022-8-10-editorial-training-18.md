---
layout: post
published: true
title: editorial training 18
date: 2022/08/10
tags: [CP]
---

## BEACH

#### subtask 1: 

Duyệt đoạn $$[l, r]$$ để đánh đấu. Mỗi lần nã đại bác chỉ cần quan tâm xem điểm đó có bị đánh giá không.

ĐPT: $$O(A \times q)$$.

#### subtask 2:

Dùng trick mảng cộng dồn để đánh dấu.

ĐPT: $$O(q + A)$$.

#### subtask 3:

Dùng segment tree để đánh dấu nhanh hơn. Có thể cài đặt không cần lazy update.

ĐPT: $$O(q \times \log(A))$$.

#### subtask 4:

Dùng dynamic segtree để tối ưu subtask 3.

ĐPT: $$O(q \times \log(A))$$.

#### subtask 5:

Do số node của dynamic segtree có thể lên đến $$q \log^2(A)$$ nên việc sử dụng thuật toán này cho subtask cuối khá rủi ro.

Nếu ta duy trì được các đoạn $$[l, r]$$ không giao nhau theo thứ tự tăng dần, việc kiểm tra xem điểm $$x$$ có bị đánh dấu không khá đơn giản. Do đó ta nghĩ đến việc sử dụng `std::set`. 

ĐPT: $$O(q \log(q))$$.

## SEQGAME

#### subtask 1:

Gọi $$dp[i][j]$$ là đáp án nếu xét các số $$i, i + 1, ..., n$$ trong dãy $$a$$ và các số $$j, j + 1, ..., m$$ trong dãy $$b$$. Ta mô tả quá trình chọn ra một số phần tử trong dãy $$a$$ và trong dãy $$b$$ để tính $$dp$$. 

ĐPT: $$O((n \times m)^2)$$.

#### subtask 2:

Ta xét hai phép xoá liên tiếp. Gọi hai giá trị $$S_1 - k_1$$ lần lượt là $$x_1, x_2$$. Gọi hai giá trị $$S_2 - k_2$$ lần lượt là $$y_1, y_2$$. Néu ta ghép hai phép vào một thay vì tách ra, ta mất chi phí: $$(x_1 + x_2) \times (y_1 + y_2) \ge x_1 \times y_1 + x_2 \times y_2$$. Do đó ta kết luận rằng chia các đoạn ra càng nhỏ để ghép càng tốt. Tốt nhất là khi một phần tử $$a$$ ghép với một đoạn $$b$$ hoặc ngược lại.

Vậy ta vẫn xét $$dp$$ như subtask 1 nhưng chỉ xét phần tử $$a_i$$ ghép với một đoạn và phần tử $$b_j$$ ghép với một đoạn.

ĐPT: $$O(n \times m \times (n + m))$$.

#### subtask 3:

Tách công thức $$dp$$ ra và dùng hai fenwick tree để tìm min.

ĐPT: $$O(n \times m \times (\log(n) + \log(m)))$$.

[code](https://ideone.com/mTDPZQ).

#### subtask 4:

Dùng min hậu tố thay vì fenwick tree.

ĐPT: $$O(n \times m)$$.

[code](https://ideone.com/75CmfP).

## JEWELTOUR

#### subtask 1:

Vì $$k = p \le 6$$ và $$c_i = 1$$ nên bài toán trở thành chọn ra một thứ tự để có chi phí di chuyển nhỏ nhất. Vậy ta chỉ cần chuẩn bị trước mảng khoảng cách giữa hai địa điểm bằng floyd và sinh hoán vị để tìm min. Chú ý: bắt đầu hành trình luôn ở thành phố $$1$$.

ĐPT: $$O(n^3 + k! \times k)$$.  

#### subtask 2:

Gọi $$dist[i][mask]$$ là khoảng cách ngắn nhất để đến thành phố $$i$$ và chọn ra được các món trang sức thuộc tập hợp $$mask$$. Ta coi mỗi cặp $$\{i, mask\}$$ là một đỉnh và dùng `dijkstra` để tính mảng $$dist$$.

ĐPT: $$O(\log(n \times 2^p) \times n \times 2^p)$$.

#### subtask 3:

Ta chia $$k$$ trang sức thành $$p$$ nhóm bằng cách random. Khi đấy chỉ cần dijkstra như subtask 2. Lấy min kết quả sau khoảng 300 lần như thế.

Gọi tập trang sức trong phương án tối ưu là $$S$$. Nếu ta random ra các phần tử trong tập $$S$$ thuộc các nhóm khác nhau thì dijkstra hiển nhiên đúng. Tỉ lệ sai: $$1 - \frac{p!}{p^p}$$. Nếu ta lặp đi lặp lại 300 lần, tỉ lệ sai sẽ vô cùng nhỏ.

ĐPT: $$O(300 \times \log(n \times 2^p) \times n \times 2^p)$$.
