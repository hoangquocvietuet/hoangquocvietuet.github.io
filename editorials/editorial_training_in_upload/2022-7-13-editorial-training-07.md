---
layout: post
published: true
title: editorial training 07
subtitle: 'Cao Tùng Dương will win IOI 2023'
date: 2022/07/13
tags: [CP]
---

## SEALORZ

#### subtask 1:

Ta mô phỏng lại quá trình đặt các khối đá:
- Chọn ra hai vị trí liên tiếp để đặt hai khối đá độ cao $$n$$.
- Lần lượt cho các khối đá độ cao $$n - 1, n - 2, ..., 1$$ vào các vị trí bên cạnh.
ĐPT: $$O(n \times 3^n)$$. 

#### subtask 2:

Ta có thể mô phỏng quá trình xây dựng các khối đá theo cách khác:
- Giả sử đang xét đoạn $$[l, r]$$. Ta có thể đặt hai khối đá $$n - \frac{r - l + 1}{2} + 1$$ vào các cặp vị trí $$(l, l + 1)$$, $$(l, r)$$, $$(r - 1, r)$$. 

Do đó, khi $$k = 0$$ thì số cách là $$3^{n - 1}$$.

#### subtask 3:

Dựa vào subtask 2, ta có thể quy hoạch động như nhau:

Gọi $$dp[l][r]$$ là kết quả nếu đặt các khối đá $$n - \frac{r - l + 1}{2} + 1, .., n$$ vào đoạn $$[l, r]$$. 

Ta có hàm $$ok(l, r, u, v)$$ trả về true nếu có thể đặt hai viên đá $$n - \frac{r - l + 1}{2} + 1$$ vào hai vị trí $$u$$, $$v$$ thoả mãn điều kiện.

Công thức: 
- `if ok(l, r, l, l + 1):  dp[l][r] += dp[l + 2][r]`.
- `if ok(l, r, l, r): dp[l][r] += dp[l + 1][r - 1]`. 
- `if ok(l, r, l, r - 1, r): dp[l][r] += dp[l][r - 2]`.

Kết quả: $$dp[1][2 \times n]$$.

Hàm $$ok$$ có thể tính trong $$O(n)$$. Do đó ĐPT là $$O(n^3)$$. 

## CODEFORCES

#### subtask 1: 

Ta chuẩn bị mảng $$nxt[i]$$ là vị trí tiếp theo sẽ chọn nếu ta chọn phần tử $$i$$. Có $$nxt[i] = x$$ với $$x$$ nhỏ nhất thoả mãn $$a_x = a_i + 1$$. Nếu không tồn tại $$i < x$$ thì ta lấy $$x < i$$.

Với mỗi vị trí $$i$$ sao cho $$a_i = 1$$, ta đi lần lượt $$nxt[i], nxt[nxt[i]], nxt[nxt[nxt[i]]], ...$$ cho đến khi gặp được $$k$$. Bên cạnh đó là duy trì thời gian đã đi qua. 

ĐPT: $$O(n \times k)$$.

#### subtask 2:

Khi $$n = k$$, dãy $$a$$ là một hoán vị. Do đó ta chỉ có một ngày bắt đầu. Bài toán trở thành chia dãy ra thành ít dãy con nhất sao cho mỗi dãy con là tương ứng một đoạn liên tiếp. 

Giả sử kết quả là $$x$$. 
- Nếu $$x = 1$$, ta có đáp án là $$n$$. 
- Ta bắt đầu từ ngày contest $$1$$ đến hết chu kì đầu tiên, $$x - 2$$ chu kì tiếp theo và kết thúc vào ngày contest $$k$$ ở chu kì cuối cùng. 

Để tìm $$x$$, ta có thể dùng `std::set`:

```
set<int> s;
for (int i = 1; i <= n; ++ i) {
    if (s.count(a[i] - 1)) {
        s.erase(a[i] - 1);
    }
    s.insert(a[i]);
}
```

#### subtask 3: 

Tối ưu subtask 1.

Xây dựng mảng $$nxt[i][j]$$ là phần tử thứ $$2^j$$ tiếp theo sẽ chọn nếu ta chọn phần tử $$i$$. Bên cạnh đó là mảng $$dist[i][j]$$ là khoảng cách từ $$i$$ tới phần tử $$nxt[i][j]$$.

Khởi tạo $$nxt[i][0]$$ như subtask 1. Từ đó khởi tạo được $$dist[i][0]$$.

Tính mảng $$nxt$$ và $$dist$$ bằng [mảng thưa](https://cp-algorithms.com/data_structures/sparse-table.html) như bình thường. 

Với mỗi $$a_i = 1$$, ta nhảy các đoạn độ dài $$2^{x_1}, 2^{x_2}, .., 2^{x_c}$$ với $$x_1, x_2, .., x_c$$ là vị trí các bit bật của $$k - 1$$.

[code](https://ideone.com/tGiF1z).

ĐPT: $$O(n \log(n))$$.

## QRYGCD

#### subtask 1:

Ta đếm số lượng $$k$$ sao cho $$gcd(a_k, g) > 1$$. Giả sử $$g = p_1^{a_1}p_2^{a_2}..p_m^{a_m}$$. Nếu ta có $$cnt_x$$ là số lượng số là bội của $$x$$ thì kết quả là:

$$ ans = cnt_{p_1} + cnt_{p_2} + .. + cnt_{p_m} - cnt_{p_1 \times p_2} - .. -cnt_{p_{m-1} \times p_m} + cnt_{p_1 \times p_2 \times p_3} + .. - ...$$

Dấu của $$cnt_x$$ chính là [hàm mobius](https://vnoi.info/wiki/algo/math/Ham-Mobius.md). Xem trên ứng dụng bao hàm loại trừ ở link trên nếu hiểu chưa rõ.

Do $$a_i$$ và $$g$$ nhỏ nên mỗi số chỉ có tối đa 4 ước nguyên tố. Để tiện update và tính toán, ta có thể dùng [fenwick tree](https://vnoi.info/wiki/algo/data-structures/fenwick.md).

ĐPT: $$O(q \times 2^4 \times \log(n))$$.

#### subtask 2:

Vẫn là ý tưởng bao hàm loại trừ ở subtask 1. Vì không có truy vấn update nên ta chỉ cần đếm. Nhờ việc chuẩn bị trước các vị trí bội số theo thứ tự tăng dần, ta có thể chặt nhị phân và biết được số lượng.  

ĐPT: $$O(q \times 2^6 \times \log(n))$$.

#### subtask 3:

Với mỗi ước nguyên tố, ta dùng một bitset để thể hiện tập hợp các vị trí là bội của nó. Số lượng vị trí $$k$$ là số lượng bit bật, trong bitset OR các bitset các ước nguyên tố của $$g$$. Việc còn lại là đếm số lượng bit bật trong đoạn $$[l, r]$$.

[code](https://ideone.com/RTxM4l).

ĐPT : $$O(q\times max(2^6 \times \log(n), \frac{n}{32}))$$.

Ngoài ra còn có cách tối ưu bao hàm loại trừ bằng chia căn hoặc BIT 2D. Các bạn tự suy nghĩ thêm. [Code của 1 idol siêu khủng](https://ideone.com/3jhHEk).