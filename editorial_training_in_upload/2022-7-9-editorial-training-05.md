---
layout: post
published: true
title: editorial training 05
subtitle: 'nobodytk will win IOI 2023'
date: 2022/07/09
tags: [CP]
---

## CNGCD

#### subtask 1:

Làm theo đề bài bảo, mỗi truy vấn for 2 vòng $$(i, j)$$ để đếm. 

ĐPT: $$O(q \times n ^ 2)$$.

#### subtask 2:

For 2 vòng $$(i, j)$$ để chuẩn bị trước kết quả. 

Mỗi truy vấn chỉ cần trả lời trong $$O(1)$$.

ĐPT: $$O(n^2 + q)$$

#### subtask 3: 

Gọi $$g_i$$ là số cặp có $$gcd$$ chia hết cho $$i$$.

Khởi tạo $$g_i = \frac{cnt_i \times (cnt_i - 1)}{2}$$ với $$cnt_i$$ là số các số có ước là $$i$$.

Vậy số cặp có $$gcd = i$$ là $$res_i = g_i - res_{2 \times i} - res_{3 \times i} - ... - res_{k \times i}$$ với $$k \times i \le 10^6$$.

Mảng $$cnt$$ tính trong $$O(a \times \log(\log(a)))$$. Mảng $$res$$ tính trong $$O(a \times \log(a))$$.

ĐPT: $$O(a \times log(a))$$.

## GENKEY

#### subtask 1:

Gọi $$dp_i$$ là chi phí nhỏ nhất để tạo ra được tiền tố độ dài $$i$$ của xâu $$s$$.

Khởi tạo: 
$$
dp_i = 
\begin{cases} 
a & i = 1 \\
\infty & i \neq 1
\end{cases}
$$.

Công thức:

$$dp_{i + 1} = min(dp_{i + 1}, dp_i + a)$$.

$$dp_{i + x} = min(dp_{i + x}, dp_i + b + c * (i - x))$$ với $$x \le i$$ và $$s_{i + x} = s_{x}$$.

Kết quả: $$dp_n$$.

ĐPT: $$O(n^2)$$.

#### subtask 2:

Ta tạo đồ thị có hướng, có trọng số $$n$$ đỉnh như sau: 

- Nối cạnh $$i$$ đến $$i + 1$$ có trọng số là $$a$$.

- Nối cạnh $$i$$ đến $$i - 1$$ có trọng số là $$c$$.

- Nối cạnh $$i$$ đến $$i + x$$ với $$x$$ lớn nhất thoả mãn $$x \le i$$ và $$s_{i + x} = s_{x}$$. Cạnh này có trọng số là $$b + c * (i - x)$$. Để tìm $$x$$, ta có thể dùng thuật toán [Z-algorithm](https://vnoi.info/wiki/translate/codeforces/z-algo.md).

Vì ta cần tạo ra một dãy thao tác `aaabbbcccaaabbccc..` có tổng nhỏ nhất. Nên đáp án là độ dài đường đi ngắn nhất từ $$1$$ đến $$n$$. 

ĐPT: $$O(n * \log(n))$$

## BALANCED

#### subtask 1:

Duy trì $$f_x$$ là tập hợp các thành phố có thể đến từ thành phố $$x$$ theo đường cao tốc.

Và $$g_x$$ là tập hợp các thành phố có thể đến từ thành phố $$x$$ theo đường tàu điện ngầm.

Hệ thống đường cân bằng khi: $$\forall 1 \le i \le n: g_i = f_i$$.

ĐPT: $$O(q \times n ^ 2)$$.

#### subtask 2:

Sử dụng CTDL Disjoint Set Union (DSU).

Khi hợp nhất cạnh $$(u, v)$$, ta chọn gốc là đỉnh có chỉ số nhỏ hơn.

Khi đó, hệ thống cân bằng khi gốc các đỉnh giống nhau ở hai hệ thống đường cao tốc và đường tàu điện ngầm.

ĐPT: $$O(q \times n)$$

#### subtask 3:

Nhận thấy: ta chỉ cần quan tâm mối quan hệ giữa hai đỉnh của cạnh đã thêm vào trước đó. 

Nếu có bất cứ hai đỉnh nào được thêm vào ở hệ thống đường này, không đến được ở hệ thống đường kia thì hệ thống hai đường không cân bằng.

Thêm các cạnh vào stack, lấy ra để kiểm tra liên thông. Nếu không thoả mãn, dừng luôn vòng lặp. Các cạnh đã xét qua không cần quan tâm nữa (vì thời điểm sau nó vẫn liên thông). Do đó ĐPT chỉ là $$O(n + q)$$.

``` c++
    for (int i = 1, type, u, v; i <= q; ++ i) {
        cin >> type >> u >> v; 
        -- type;
        dsu[type].unite(u, v);
        st[type].push({u, v});
        while (!st[type].empty()) {
            pair <int, int> pii = st[type].top();
            if (!dsu[type^1].isSame(pii.first, pii.second))
                break;
            st[type].pop();
        }
        while (!st[type^1].empty()) {
            pair <int, int> pii = st[type^1].top();
            if (!dsu[type].isSame(pii.first, pii.second))
                break;
            st[type^1].pop();
        }
        cout << ((st[0].empty() && st[1].empty())? "Yes\n" : "No\n");
    }
```
