---
layout: post
published: true
title: editorial training 11
subtitle: 'học giỏi mới có nhiều đứa yêu'
date: 2022/07/23
tags: [CP]
---

Mình thấy nhiều bạn làm nhiều cách khác nhau. Editorial chỉ giới thiệu đến cách của người làm test. Nếu muốn biết nhiều solution hơn, các bạn nên trao đổi và hỏi bài một cách tích cực.

## XORDIST

#### subtask 1:

Tính $$dist(i, j)$$ là xor giữa hai đỉnh $$i$$ và $$j$$.

ĐPT: $$O(n^2)$$.

#### subtask 2:

Ta thấy $$dist(u, v) = dist(1, u) \oplus dist(1, v)$$. Thật vậy, có thể giả sử cây gốc $$1$$ và dùng tính chất LCA.

Với mỗi bit $$i$$, ta đếm xem có bao cặp $$dist(u, v)$$ bật. Biết rằng $$1 \oplus 0 = 1$$ nên ta chỉ cần đếm bao nhiêu số $$u$$ có $$dist(1, u)$$ bật bit $$i$$ và có bao nhiêu số $$v$$ có $$dist(1, v)$$ tắt bit $$i$$. 

ĐPT: $$O(n \times \log(c))$$.

## TREEQUERIES

#### subtask 1:

Ta chuẩn bị trước mảng $$cnt[i][c]$$ với ý nghĩa có bao nhiêu đỉnh có màu $$c$$ trong cây con gốc $$i$$.

ĐPT: $$O((q + n) \times \sqrt{n})$$.

#### subtask 2:

Vì $$k_i = 1$$ nên ta chỉ cần đếm xem trong cây con gốc $$u_i$$ có bao nhiêu màu phân biệt. 

Cách 1: small to large.

Duy trì tập set các màu phân biệt trong cây con gốc $$i$$. Khi hợp hai tập, ta for tập bé hơn.

ĐPT: $$O(n \log^2(n) + q)$$.

Cách 2: bitset.

Duy trì bitset $$bs[i]$$ là các màu bật trong cây con gốc $$i$$. Ta cập nhật như subtask 1.

ĐPT: $$O(\frac{q \times n + n^2}{32})$$.

#### subtask 3:

Trải cây ra theo euler tour và dùng [mo on tree](https://codeforces.com/blog/entry/43230) vì ta chỉ cần quản lí cây con (đoạn liên tiếp).

Dễ dàng duy trì được mảng $$cntColor[i]$$ là số đỉnh có màu $$i$$ khi dịch chuyển theo thuật toán. Đồng thời lưu mảng $$cntAppear[i]$$ là số màu xuất hiện ít nhất $$i$$ lần. 

[code](https://ideone.com/3OzEgv).

ĐPT: $$O((q + n) \times \sqrt{n})$$.

## WATER

#### subtask 1: 

Mô phỏng lại các truy vấn.

ĐPT: $$O(q \times n)$$.

#### subtask 2:

Gọi $$pos[i]$$ là vị trí của đỉnh $$i$$ trên mảng.

Vì cây là một mảng nên chắc chắn tồn tại vị trí $$i$$ sao cho $$[pos[1], i]$$ không có nước và $$[i + 1, n]$$ có nước. Đồng thời tồn tại vị trí $$j$$ sao cho $$[j, pos[1]]$$ không có nước và $$[1, j - 1]$$ có nước. Ta chỉ cần duy trì vị trí $$i$$ trong $$O(1)$$ để trả lời truy vấn.

ĐPT: $$O(n + q)$$.

#### subtask 3:

Nếu $$u$$ có nước, toàn bộ cây con gốc $$u$$ có nước nên ta không cần làm gì cả. Do vậy, khi chạy toàn bộ các truy vấn có $$t = 1$$, mỗi đỉnh chỉ xét tối đa một lần. Tổng độ phức tạp vẫn là $$O(n)$$.

ĐPT: $$O(q + n)$$.

#### subtask 4:

Ta thấy rằng, nếu trong cây con gốc $$u$$, có bất kì đỉnh nào được rút nước trước đó thì đáp án chắc chắn là $$0$$. Ngược lại, đáp án là $$1$$.

Vậy nên ta cần mảng $$a[u] = 0/1$$ quản lí xem đỉnh $$u$$ có được rút nước trước đó không.

Khi rút nước, ta gán $$a[u] = 1$$ như bình thường.

Khi đổ đầy nước, nếu có một đỉnh $$a[c] = 1$$ trong cây con gốc $$u$$ (nghĩa là $$c$$ đã được rút nước trước đó), ta gán $$a[v] = 0$$ với $$v$$ là tất cả con của $$u$$. Nhưng ta nhận thấy tất cả các đỉnh tổ tiên của $$u$$ sẽ bị ảnh hưởng (nếu sau đó truy vấn vào tổ tiên $$u$$, đáng lẽ $$a[c] = 1$$ nhưng đã bị thay đổi). Để giải quyết, ta chỉ cần gán $$a[par[u]] = 1$$ với $$par[u]$$ là cha của đỉnh $$u$$. 

Để tăng tốc, ta trải euler tour và dùng một segment tree với lazy propagation để thực hiện tất cả thao tác trên.

[code](https://ideone.com/90pkp0).

ĐPT: $$O(q \times \log(n))$$.