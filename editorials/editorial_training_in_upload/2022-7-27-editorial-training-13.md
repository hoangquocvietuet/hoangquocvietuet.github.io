---
layout: post
published: true
title: editorial training 13
subtitle: 'imagine CM, cant be me'
date: 2022/07/27
tags: [CP]
---

## TYPING

#### subtask 1:

Ta bắt đầu với tay gõ kí tự đầu tiên khác `T`. Sau đó chuyển tay nếu từ `A` gõ `I` hoặc từ `I` gõ `A`.

ĐPT: $$O(\sum \mid S\mid)$$.

#### subtask 2:

$$X_i = 1$$, mỗi lần chuyển từ `I` sang `A` hoặc `A` sang `I`, ta cần biết có bao nhiêu xâu con của $$S$$ chứa lần đổi tay này. Gọi 2 vị trí đó là $$i$$ và $$i + 1$$, hiển nhiên số xâu chứa lần đổi tay này là $$i * (\mid S \mid - i)$$.

ĐPT: $$O(\sum \mid S\mid)$$.

#### subtask 3:

Nhận thấy `T` không ảnh hưởng tính chất trên. Do đó ta lưu vị trí `A` và `I` cuối cùng để làm.

ĐPT: $$O(\sum \mid S\mid)$$.

## JUMP

#### subtask 1:

Ta nhảy trực tiếp từ $$1$$ đến $$n$$ là tối ưu nhất. Do đó đáp án là $$n + 2$$.

ĐPT: $$O(1)$$.

#### subtask 2:

Nếu $$a_1 = 2$$, ta nhảy đến $$n$$.

Nếu không, ta nhảy đến vị trí $$2$$ gần nhất và nhảy tiếp đến $$n$$.

ĐPT: $$O(1)$$.

#### subtask 3:

Ta thử hết tất cả các cách nhảy bằng cách chọn ra tất cả vị trí "sẽ" nhảy.

ĐPT: $$O(2^n)$$.

#### subtask 4:

Gọi $$dp[j]$$ là năng lượng cần tiêu hao ít nhất nếu nhảy từ bệ đá $$1$$ đến bệ đá thứ $$j$$.

Công thức: $$dp[j] = min(dp[j], dp[i] + h[i] + h[j] + (j - i + 1))$$ với $$1 \le i < j$$ và $$max(i + 1, j - 1) \le h[i]$$.

Đáp án: $$dp[n]$$.

#### subtask 5:

Cách 1: Luyện tay và suy nghĩ vì nhiều bài cũng tương tự.

Ta thay đổi công thức bên trên: $$dp[j] = min(dp[j], (h[j] + j + 1) + dp[i] + h[i] - i)$$.

Phần $$h[j] + j + 1$$ cố định nên ta không cần quan tâm. Việc cần làm là tìm vị trí $$1 \le i < j$$ thoả mãn $$max(i + 1, j - 1) \le h[i]$$ sao cho $$dp[i] + h[i] - i$$ nhỏ nhất. 

Nếu làm như trên thì ta rất khó tìm được các vị trí $$i$$ cũng như tìm nhanh đáp án.

Do đó ta nên lật ngược cách $$dp$$ (thực ra lật ngược lại khiến bài toán xuôi hơn). Ở vị trí $$i$$, ta sẽ tối ưu các $$f[j] = min(f[j], dp[i] + h[i] - i)$$. Ta có thể chặt nhị phân tìm vị trí $$j$$ lớn nhất thoả mãn $$max(i + 1, j - 1) \le h[i]$$ và dùng segtree để cập nhật cho cả đoạn.

ĐPT: $$O(n \log(n))$$.

[code](https://ideone.com/cz2bA8).

Cách 2: Quan sát.

Ta luôn phải nhảy từ $$1$$ đến $$n$$ nên giả sử số bước là $$x$$, ta luôn có mất năng lượng $$n - i + x$$.

Giả sử đang ở $$i$$ và ta có $$j > i$$ nhỏ nhất sao cho $$h_j > h_i$$. Nếu không tồn tại $$j$$, ta coi $$j = n$$. Nhận thấy ta luôn phải nhảy vào $$j$$ và $$x$$ cần nhỏ nhất nên ta nhảy trực tiếp đến $$j$$ là tối ưu nhất.

ĐPT: $$O(n)$$.

Nếu cần kết quả của mọi vị trí thì ta cần nhảy theo mảng thưa (như bài `INCQUERIES`).

## COMPSTR

#### subtask 1:

Casework.

ĐPT: $$O(1)$$.

#### subtask 2:

Chọn ra một số vị trí sao cho bạn sẽ nén $$pos[i]$$ đến $$pos[i + 1] - 1$$ và kiểm tra.

ĐPT: $$O(2^n \times n)$$.

#### subtask 3:

Gọi $$comp[l][r]$$ là tổng một số giá trị $$\mid c_i \mid + \mid s_i \mid$$ nhỏ nhất nếu nén xâu $$S[l, r]$$.

Với mỗi $$k$$, ta check xâu $$S[l, r]$$ có chia ra làm các xâu dộ dài $$k$$ không và lấy min kết quả. Để kiểm tra nhanh có thể dùng hash. Nếu $$S[l, r - k] = S[l + k, r]$$ ta có thể đảm bảo có thể nén $$S[l, r]$$ thành cặp $$((r - l + 1) / k, S[l, l + k - 1])$$ nên ta có dễ dàng tính $$\mid c\mid + \mid s\mid$$.

Gọi $$dp[i]$$ là đáp án nếu xét $$i$$ kí tự đầu của xâu $$S$$.

Công thức: $$dp[i] = min(dp[i], dp[j - 1] + comp[j][i])$$ với $$1 \le j \le i$$.

Đáp án: $$dp[n]$$. 

#### subtask 4:

Nhận thấy: Một cặp $$(c_i, s_i)$$ có thể tương đương nhiều cặp khác. Nhưng $$\mid s_i\mid $$ giảm $$1$$ thì $$\mid c_i\mid $$ tăng tối đa $$1$$ nên ta cần nén sao cho xâu $$s_i$$ càng ngắn càng tốt. 

Ta có thể xét $$k$$ tăng dần để tính $$S[l, r]$$ có chia ra làm các xâu độ dài $$k$$ được hay không. Mỗi cặp $$(l, r)$$ chỉ được xét một lần. 

[code](https://ideone.com/mIpub5).

ĐPT: $$O(n^2)$$.