---
layout: post
published: true
title: editorial training 21
date: 2022/08/22
tags: [CP]
---

## SUBSETS

#### subtask 1:

Ta chỉ cần đếm xem có thể chia tập $$S$$ ra bao nhiêu tập $$P$$.

Gọi $$dp[i][j]$$ là số cách chia $$i$$ số đầu ra tập có $$j$$ tập. 

Ta có hai khả năng: nếu $$i - 1$$ phần tử đầu đã cho vào $$j$$ nhóm rồi thì ta có thể cho phần tử $$i$$ và $$1$$ trong $$j$$ nhóm. Ngoài ra ta cũng có thể cho nó làm nhóm riêng biệt mới. 

Công thức: $$dp[i][j] = dp[i - 1][j] * j + dp[i - 1][j - 1]$$.

Gọi $$f[i]$$ là tổng của $$dp[i][1] + ... + dp[i][i]$$.

Đáp số $$f[n]$$.

ĐPT: $$O(n^2)$$.

#### subtask 2:

Gọi $$L_{Q_i}$$ là số cách chia dãy không tránh tập $$Q_i$$ (tồn tại $$P_j$$ chứa $$Q_i$$ như một tập con).

Xét $$m = 1$$. Kết quả là $$f[n] - L_{Q_1}$$.  Ta coi tập $$Q_1$$ là một phần tử riêng biệt, dãy $$S$$ lúc này có $$c = \mid S \mid - \mid Q_1 \mid + 1$$ phần tử. Vậy $$L_{Q_1} = f[c]$$.

Xét $$m = 2$$, ta thấy $$L_{Q_1}$$ và $$L_{Q_2}$$ có một số cách chia dãy bị lặp. Do đó ta phải trừ đi phần bị lặp này. Nếu vẽ sơ đồ ven, ta thấy phần bị lặp là $$L_{Q_1 \cup Q_2}$$.

ĐPT: $$O(n^2)$$.

#### subtask 3:

Nhờ hai gợi ý từ subtask trước, ta ra được cách làm bao hàm loại trừ hoàn chỉnh. 

Kết quả: $$L_0 - L_{Q_1} - L_{Q_2} - ... - L_{Q_m} + L_{Q_1 \cup Q_2} + L_{Q_1 \cup Q_3} + ... - ...$$.

ĐPT: $$O(2^m + n^2)$$.

#### subtask4: 

Tối ưu bộ nhớ $$dp$$. 

Ngoài ra còn có cách đếm phần bù để tính mảng $$f$$.

ĐPT: $$O(2^m + n^2)$$.

## BUILDROAD

#### subtask 1:

Sau mọi truy vấn $$1$$, ta được một cây hoàn chỉnh. Với mỗi đỉnh $$i$$, ta cần chuẩn bị trước mảng $$f[i]$$ là đỉnh xa $$i$$ nhất để trả lời truy vấn $$2$$ trong $$O(1)$$.

Ta có thể dùng `dp reroot` để tính mảng $$f$$.

ĐPT: $$O(q + n)$$.

#### subtask 2:

Nhận xét: trong một cây, đỉnh xa đỉnh $$u$$ nhất luôn là một trong hai đầu đường kính.

Nhận xét: giả sử ta có hai cây $$T_1$$ và $$T_2$$. Cây $$T_1$$ có đường kính là $$(x-y)$$. Cây $$T_2$$ có đường kính là $$(u-v)$$. Vậy nếu ta nối hai cây bằng một cạnh nào đó, đường kính của cây mới sẽ là $$2$$ trong $$4$$ điểm $$(x-y-u-v)$$.

Do đó ta dùng `dsu on tree`, mỗi thành phần liên thông (tplt), ta lưu lại hai đầu đường kính của cây đó (tplt đó). Khi hợp nhất, ta cần duyệt tối đa $$\frac{4^2}{2} = 8$$ phép tính để tìm đường kính mới. 

Ta cũng cần tìm độ dài đường đi giữa hai đỉnh nhanh. Khi `dsu on tree`, ta duyệt qua hết cây nhỏ hơn để build mảng tính lca. 

`Ssu on tree` tốn $$O(n \times \log^2(n))$$. Build mảng tính lca tốn $$O(\log(n))$$. ĐPT: $$O(n \times \log^2(n) + q)$$.

#### subtask 3:

Ta xây cây trước để tính lca $$O(1)$$.

ĐPT: $$O(n \times \log(n) + q)$$

## TEAMS

Giả sử ta có chọn ra phần tử $$x_1, x_2, ..., x_k$$. Ta phải có $$v_{x_1}, v_{x_2}, ..., v_{x_k}$$ nằm trong đoạn $$[l_{x_1}, r_{x_1}$$, $$[l_{x_2}, r_{x_2}]$$, ..., $$[l_{x_k}, r_{x_k}]$$. Thực tế ta chỉ cần quan tâm đến $$v_{min}$$ và $$v_{max}$$ có nằm trong các đoạn hay không. 

#### subtask 1:

Duyệt mọi khả năng lựa chọn và kiểm tra. 

ĐPT: $$O(2^n \times n)$$.

#### subtask 2:

Nếu ta sắp xếp lại theo $$v$$, các phần tử được chọn sẽ thuộc một đoạn liên tiếp. Ta duyệt hai đầu mút của đoạn. Giả sử hai đầu mút đó là $$a$$ và $$b$$. Nếu chọn phần tử $$i$$, ta chỉ cần đảm bảo $$v_a$$ và $$v_b$$ nằm trong đoạn $$[l_i, r_i]$$ hay không.

ĐPT: $$O(n^3)$$.

#### subtask 3:

Với mỗi $$a$$, ta xét $$b$$ tăng dần và duy trì một danh sách những người $$i$$ được chọn. Nhận thấy nếu $$r_i < b$$ đang xét thì không bao giờ $$i$$ được chọn nữa.

Mỗi lần tăng $$b$$, ta xét có thể thêm phần tử $$b - 1$$ vào danh sách hay không. Có thể cài đặt hai con trỏ để loại bỏ những phần tử được chọn trước đó và có $$r_i < b$$.

ĐPT: $$O(n^2)$$.

#### subtask 4:

Ta viết lại bài toán, nếu chọn ra tập hợp $$k$$ phần tử, đánh số từ $$1$$ đến $$k$$:
- Với mọi $$i$$: $$l_i \le v_{min} \le v_i$$. 
- Với mọi $$i$$: $$v_i \le v_{max} \le r_i$$.

Nếu ta coi $$(v_{min}, v_{max})$$ là một điểm trên hệ trục toạ độ thì nó phải thuộc hình chữ nhất có hoành độ từ $$l_i$$ đến $$v_i$$, tung độ từ $$v_i$$ đến $$r_i$$. Bài toán tìm ra tập hợp nhiều phần tử nhất tương đương tìm ra một điểm thuộc nhiều hình chữ nhật nhất. 

Nếu ta duyệt từng điểm tung độ và từng điểm toạ độ, độ phức tạp sẽ rất lớn. Ta tối ưu bằng cách chỉ duyệt hoành độ và xét một đường thẳng tung độ, nghĩa là xét các điểm $$(x, 1), (x, 2), (x, 3), ..., (x, max)$$), ta chọn ra điểm tốt nhất.

Ta cần tìm ra điểm tốt nhất chính là tìm ra điểm nằm trong nhiều hình chữ nhất nhất. Nếu ta có một mảng $$cnt_i$$ là số hình chữ nhất chứa điểm $$i$$, ta chỉ cần tìm $$max(cnt_1, cnt_2, ..., cnt_{max})$$.

Với mỗi $$x$$, ta xây dựng lại $$cnt$$ rất tốn thời gian. Do đó ta tìm ra điểm khác biệt giữa mảng $$cnt$$ ở bước xét $$x - 1$$ với bước xét $$x$$. 

Xét một hình chữ nhật phủ các hoành độ từ $$l$$ đến $$r$$, phủ các tung độ từ $$b$$ đến $$t$$:
- Khi chuyển từ $$x = l - 1$$ sang $$x = l$$, hình chữ nhật này xuất hiện, ta tăng $$cnt[b..t]$$ lên $$1$$.
- Khi chuyển từ $$x = r$$ sang $$x = r + 1$$, hình chữ nhật này biến mất, ta giảm $$cnt[b..t]$$ đi $$1$$.

Vậy mảng $$cnt$$ cần hỗ trợ hai thao tác tăng giảm một đoạn và tìm $$max$$ cả đoạn. Ta có thể sử dụng CTDL Segment tree.

Có tối đa $$3 \times n$$ toạ độ khác nhau trên tung độ và hoành độ. ĐPT: $$O(A \times \log(A))$$. 

[code](https://ideone.com/jvzCH8).