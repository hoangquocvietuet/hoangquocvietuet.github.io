---
layout: post
published: true
title: editorial training 10
subtitle: 'dp dp dp, cái gì quan trọng phải nhắn 3 lần'
date: 2022/07/21
tags: [CP]
---

## EQUALDEL

#### subtask 1:

Backtrack sinh hết tất cả các dãy có thể và check thoả mãn hay không.

ĐPT: $$O(2^n \times n^2)$$.

#### subtask 2:

Gọi $$dp[i]$$ là đáp án nếu tạo dãy tăng dần khi xét $$i$$ phần tử đầu. Ta có thể chứng minh trong phương án tối ưu, dãy luôn có giá trị kết thúc là $$a_i$$. Thật vậy:

Nếu không sử dụng phép xoá, ta phải đảm bảo $$a_i > a_{i - 1}$$ và $$dp[i] = dp[i - 1]$$ $$\rightarrow$$ phần tử cuối cùng dãy tạo được là $$a_i$$.

Nếu sử dụng phép xoá, ta chọn ra các vị trí $$j < i$$ thoả mãn $$a_j = a_i$$ và tối ưu $$dp[i] = min(dp[i], dp[j] + 1)$$ $$\rightarrow$$ phần tử cuối cùng của dãy tạo được là $$a_i$$. 

Để tìm kết quả cho dãy giảm nghiêm ngặt, cho $$a_i = n - a_i + 1$$ và chạy lại thuật toán trên.

ĐPT: $$O(n^2)$$.

#### subtask 3:

Ta chỉ cần quan tâm $$j$$ sao cho $$dp[j]$$ nhỏ nhất $$\rightarrow$$ lưu vào một mảng min và cập nhật dần.

ĐPT: $$O(n)$$.

## MAKEPAIR

#### subtask 1:

Gọi $$dp[mask]$$ là cách ghép cặp nếu từ $$2 \times N$$ phần tử chỉ còn các phần tử thuộc $$mask$$.

Chọn ra hai bit $$1$$ liên tiếp của mask và bỏ hai bit đấy đi. Ta được trạng thái mới để cập nhật. Kết quả là $$dp[0]$$.

ĐPT: $$O(2^n \times n)$$.

#### subtask 2:

Nhận thấy các phần tử luôn xếp theo thứ tự tăng dần $$\rightarrow$$ ta chỉ cần quan tâm các đoạn liên tiếp.

Gọi $$dp[l][r]$$ là đáp án nếu ghép cặp các phần tử trong đoạn $$[l, r]$$. Nếu $$l > r$$ hoặc $$(r - l + 1) \mod  2 = 1$$ thì hiển nhiên không tồn tại cách ghép cặp (có thể coi là $$1$$ để thuận tiện). Ngược lại, vì phần tử $$l$$ chắc chắn được ghép cặp nên ta chọn ra phần tử $$l < i \le r$$ để ghép với nó. 

Đảm bảo rằng $$(i - l + 1) \mod 2 = 0$$. Ta có $$dp[l + 1][i - 1] \times dp[i + 1][r]$$ cách chọn cặp và $$\frac{\frac{r - l + 1}{2}!}{\frac{i + 1 - l}{2}! \times \frac{r - i}{2}!}$$ cách sắp xếp thứ tự (công thức hoán vị lặp).

## BALLOON

## subtask 1:

Backtrack sinh ra hết các cách chọc bóng và lấy max.

ĐPT: $$O(2^n \times n^2)$$.

## subtask 2:

Gọi $$dp[l][r][k][x]$$ là số điểm tối đa đạt được nếu biến đoạn $$[l, r]$$ thành một dãy độ dài $$k$$ và có chung màu $$x$$. Nếu không thể, cho điểm bằng $$-\infty$$.
Gọi số quả bóng có màu $$x$$ trong đoạn $$[l, r]$$ là $$cnt[l][r][x]$$. Cần đảm bảo $$cnt[l][r][x] \ge k$$.

Ta cần chọn ra vị trí $$i$$ để tạo hai dãy bóng $$[l, i]$$ và $$[i + 1, r]$$ sau đó ghép vào. Bên cạnh đó cần chọn độ dài của mỗi dãy. Lưu ý trường hợp độ dài dãy bằng $$0$$.

ĐPT: $$O(n^5)$$. Thực tế do hằng số và test nên có thể nhanh chậm hơn.

[số màu không quan trọng =)) chỉ để giảm hằng số](https://ideone.com/CsubBh).

## subtask 3:

Solution khá ảo, đề nghị bình tĩnh tự tin.

Nhận thấy, nếu có $$k$$ quả bóng liên tiếp, ta nên chọc thủng cả $$k$$ quả thay vì chia nhỏ ra. Với mỗi dãy bóng liên tiếp cùng màu, ta nén thành cặp (màu, số lượng) đại diện.

Gọi $$dp[l][r][k]$$ là điểm tối đa đạt được nếu biến đoạn $$[l, r]$$ (dãy đã nén) thành dãy độ dài $$k$$ và có màu trùng màu phần tử $$l$$.

Chọn vị trí $$i$$ như subtask 2 nhưng ta chắc chắn rằng đoạn $$[l, i]$$ biến thành đoạn có độ dài là $$k$$ và đoạn $$[i + 1, r]$$ sẽ biến thành đoạn độ dài là $$0$$.

Nếu có $$color_l == color_r$$, đoạn $$[l, r - 1]$$ sẽ biến thành đoạn độ dài $$k - number_r$$ (bỏ đi phần tử $$r$$).

Cách làm trên đúng và nhanh vì ta chuyển `màu` của đoạn nhờ sử dụng đoạn độ dài $$0$$ (nên có thể bỏ chiều độ dài và màu ở subtask 2).

[code](https://ideone.com/1iCBNC).

ĐPT: $$O(n^3)$$.