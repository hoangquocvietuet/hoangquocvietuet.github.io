---
layout: post
published: true
title: editorial training 09
subtitle: 'Muốn có người iu wa'
date: 2022/07/15
tags: [CP]
---

## HAIRCUT

#### subtask 1:

Duyệt từng x và tìm số cặp nghịch thể bằng Fenwick Tree. 

ĐPT: $$O(n^2 \log(n))$$.

#### subtask 2:

Duyệt x theo thứ tự giảm dần. Các số lớn hơn $$x + 1$$ đã được cập nhật trước đó. Vì vậy, ta chỉ cần qua tâm các số bằng $$x + 1$$.

Giả sử ban đầu có cặp nghịch thế $$a_i > a_j = x + 1$$. Nếu xét giá trị $$x$$, cặp nghịch thế này sẽ mất đi do lúc này: $$a_i = a_j = x$$. Vậy nên ta dễ dàng tính được số cặp nghịch thế giảm đi.

ĐPT: $$O(n \log(n))$$.

## KSEQ

#### subtask 1:
Gọi $$pref[i]$$ là tổng $$i$$ phần tử đầu tiên của dãy.

Gọi $$dp[i][j]$$ là đáp án nếu chia $$i$$ phần tử đầu ra làm $$j$$ dãy. Ta có công thức:

$$dp[0][0] = 0$$.

$$dp[i][j] = + \infty $$.

$$dp[i][j] = min(dp[i][j], (max(dp[h][j - 1], pref[i] - pref[h]))$$ với $$0 \le h \le i - 1$$.

ĐPT: $$O(n^3)$$. Thực tế chạy nhanh hơn.

#### subtask 2: 

Nhận xét: 

- Cố định $$j - 1$$: $$dp[h][j - 1]$$ tăng dần nếu $$h$$ tăng dần.
- Cố định $$i$$: $$pref[i] - pref[h]$$ giảm dần nếu $$h$$ tăng dần.

Do đó ta có thể chặt nhị phân vị trí đầu tiên mà $$dp[h][j - 1] \ge pref[i] - pref[h]$$. 

Gọi đó là vị trí $$h'$$. Ta có $$dp[i][j] = min(dp[h'][j - 1], pref[i] - pref[h' - 1])$$. Lưu ý trường hợp: $$h'$$ không tồn tại hoặc $$h' = 0$$.

ĐPT: $$O(n^2 \log(n))$$. Thực tế chạy nhanh hơn.

#### subtask 3: 

Gọi $$opt[i][j]$$ là vị trí $$h'$$ tối ưu khi tính $$dp[i][j]$$.

Nhận xét: $$opt[i][j] \le opt[i + 1][j]$$. Do đó ta có thể tối ưu bằng hai con trỏ.

Để giảm bộ nhớ, ta có thể `for` $$j$$ trước.

ĐPT: $$O(n^2)$$.

## BINPALIN

Đây là một bài tương đối khó vì cần nháp công thức và xử lí tối ưu. Đề nghị các bạn đọc đến đâu nháp đến đó vì `editorial` chỉ nói một cách `khó hiểu`.

#### subtask 1: 

Mỗi độ dài $$i$$, chuẩn bị trước tất cả xâu nhị phân đối xứng độ dài $$i$$ và trả lời truy vấn.

ĐPT: $$O(n \times 2^n + T)$$.

#### subtask 2:

Ban đầu, ta có mảng $$s$$ với $$s_1 = s_2 = .. = s_n = -1$$.

Xây dựng đáp án theo vị trí tăng dần. Giả sử xét vị trí $$i$$. Nếu tại $$i$$ đặt được $$0$$, ta chọn $$0$$. Nếu không ta bắt buộc phải đặt $$1$$.

Để kiểm tra xem tại $$i$$ đặt được $$0$$ hay không, ta giả sử $$s_i = 0$$ và đếm số lượng xâu có thể tạo ra với $$s_{i + 1}, s_{i + 2}, .., s_n$$.

Ta đếm số lượng xâu đối xứng lẻ có thể xây được, cộng số lượng xâu đối xứng chẵn có thể xây được. Và trừ đi số lượng xâu vừa đối xứng chẵn vừa đối xứng lẻ có thể xây được.

Nếu tồn tại $$i \neq j$$ lẻ sao cho $$s_i, s_j \neq -1$$ và $$s_i \neq s_j$$, không tồn tại xâu đối xứng lẻ. 

Nếu tồn tại $$i \neq j$$ chẵn sao cho $$s_i, s_j \neq -1$$ và $$s_i \neq s_j$$, không tồn tại xâu đối xứng chẵn. 

Ngược lại,

Gọi `odd` là vector chứa các vị trí lẻ, `even` là các vector chứa vị chẵn.

Đếm số xâu đối xứng lẻ: 
- Các vị trí chẵn lớn hơn $$i$$ được đặt tuỳ ý (giả sử có $$x$$) $$\rightarrow$$ có $$2^{x}$$ cách.
- Các vị trí lẻ lớn hơn $$i$$ và nhỏ hơn $$odd[\frac{odd.size() + 1}{2}]$$ được đặt tuỳ ý (giả sử có $$y$$) -> $$2^{y}$$ cách.
- Vậy có tổng cộng có $$2^x \times 2^y$$ cách.

Đếm số xâu đối xứng chẵn dựa vào `even` tương tự.

Số xâu đối xứng vừa chẵn vừa lẻ chính là xâu đối xứng ($$s_i = s_{n - i + 1}$$). Do đó chỉ các vị trí lớn hơn $$p$$ và nhỏ hơn vị trí chính giữa được đặt tuỳ ý (giả sử có $$z$$) $$\rightarrow$$ $$2^z$$ cách.

Giả sử kết quả là $$ans$$. Nếu $$k > ans$$ thì ta buộc đặt $$1$$ vào vị trí $$i$$ và $$k = k - ans$$. Nếu không, ta có thể đặt $$0$$ (tối ưu hơn).

Cuối cùng, nếu $$k \neq 1$$ thì không tìm được. Ngược lại ta có mảng $$s$$ là đáp án.

ĐPT: $$O(T \times n^2)$$.

Đề nghị các bạn nháp lại để tự suy ra công thức. Đặc biệt là các phần $$x, y, z$$ ở trên.

[code tham khảo](https://ideone.com/yU6ofk).

#### subtask 3:

Ý tưởng giống hệt subtask 2 nhưng cần thêm một số kĩ thuật:
- Đếm $$x, y, z$$ nhanh trong $$O(1)$$ bằng Toán.
- Vì $$k \le 10^{18}$$ nên có thể coi $$2^x$$ đạt giá trị tối đa là $$2 \times 10^{18}$$. 

[code tham khảo](https://ideone.com/8L2RPU).

ĐPT: $$O(T \times n)$$.
