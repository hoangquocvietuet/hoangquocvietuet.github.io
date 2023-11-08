---
layout: post
published: true
title: editorial training 08
subtitle: 'Lê Tăng Phú Quý không phải người mà là một hệ tư tưởng'
date: 2022/07/15
tags: [CP]
---

## CALCSUM

#### subtask1:

Vì $$1 \le l \le r \le 10^6$$ nên có thể duyệt qua tất cả cá số. Tuy nhiên cần chuẩn bị trước mảng tổng tiền tố để trả lời truy vấn cho nhanh. 

ĐPT: $$O(T + 10^6 \times 6)$$.

#### subtask 2:

- TH1: Có đúng $$1$$ chữ số phân biệt. Ta chỉ cần thử từng chữ số và độ dài. ĐPT: $$O(9 \times 18)$$.

- TH2: Có đúng $$2$$ chữ số phân biệt. Ta thử hai chữ phân biệt và từng độ dài. Mỗi vị trí có hai lựa chọn. Thử theo thứ tự tăng dần các số. ĐPT: $$O(2^{19} \times 10 \times 9)$$.

Sau đó chuẩn bị mảng tổng tiền tố và trả lời $$T$$ truy vấn. Mỗi truy vấn ta thử từng độ dài và chặt nhị phân vị trí đoạn $$[l, r]$$.

#### subtask 3:

Vì $$k = 10$$ nên tất cả các số trong đoạn $$[l, r]$$ đều hợp lệ. Để tính tổng, ta dùng công thức $$res = \frac{(r + l) \times (r - l + 1)}{2}$$. Vì $$r + l$$ và $$r - l + 1$$ khác tính chẵn lẻ nên ta chia trước rồi mới nhân. Chú ý: phép nhân có thể vượt `long long`.

#### subtask 4:

Nếu bạn là người có kinh nghiệm, bạn sẽ nghĩ ngay đến [`dp digit`](https://codeforces.com/blog/entry/53960) nếu gặp những bài dạng này.

Ta tính tổng các số mà có không quá $$k$$ chữ số phân biệt trong đoạn $$[1, r]$$ trừ đi đoạn $$[1, l - 1]$$.

Gọi $$dp[pos][smaller][mask]$$ là số lượng các số nếu ta xây dựng số đến vị trí $$pos$$, đã nhỏ hơn số chặn trên hay chưa, và tập hợp chữ số đang có là $$mask$$. Gọi $$g[pos][smaller][mask]$$ là tổng các số (đáp án).

Ta cần xây dựng các chữ số theo tiền tố của chặn trên. Chữ số ở $$pos$$ chỉ có thể nhận giá trị $$[0, 9]$$ nếu tiền tố đã xây dựng nhỏ hơn tiền tố của chặn trên. Nếu không chữ số ở $$pos$$ nhận giá trị $$[0, num[pos]]$$. Bên cạnh đó, $$mask$$ chỉ thay đổi nếu như $$mask \neq 0$$ (không bắt đầu bằng $$0$$). 

Chữ số $$i$$ sẽ đóng góp vào $$g[pos][smaller][mask]$$ một lượng $$dp[pos + 1][smaller \lor i < lim][(mask \neq 0 \lor i)? mask \lor 2^i : mask]$$ $$\times 10^{num.size() - pos - 1} \times i$$.



Với những bài `dp digit`, người ta thường dùng đệ quy có nhớ để tính. 

[code](https://ideone.com/WrP6W0).

## ESCAPE

#### subtask 1:

Mỗi ô đại diện cho một đỉnh. Ta tạo đồ thị có trọng số. Hai ô kề nhau cùng hàng $$i$$ sẽ nối với nhau và có trọng số là $$x_i$$. Cổng dịch chuyển thứ $$i$$ sẽ nối hai ô $$(a_i, b_i)$$ và $$(c_i, d_i)$$ với trọng số là $$-h_i$$.

Ta cần tìm đường đi ngắn nhất từ đỉnh $$(1, 1)$$ đến đỉnh $$(n, m)$$. Dùng thuật toán [Bellman-Ford](https://cp-algorithms.com/graph/bellman_ford.html).

ĐPT: $$O((n \times m)^2)$$.

#### subtask 2:

Gọi $$dist[i][j]$$ là năng lượng ít nhất cần bỏ ra nếu đi từ ô $$(1, 1)$$ đến ô $$(i, j)$$. Ta có thể dùng thuật toán [dijkstra](https://cp-algorithms.com/graph/dijkstra.html) trong cùng hàng để tính $$dist[i][x]$$ với $$1 \le x \le m$$. Sau đó lại đi theo cổng dịch chuyển để tối ưu $$dist$$ ở hàng khác.

ĐPT: $$O(n \times m \times \log(n \times m) + k)$$.

#### subtask 3:

Nhận xét: ta chỉ cần quan tâm các ô có cổng dịch chuyển. 

Bên cạnh đó các cổng dịch chuyển luôn có $$h = 0$$ nên ta có thể xây dựng đồ thị có đỉnh là các cổng dịch chuyển và dijkstra trên đồ thị này.

Lưu ý: tạo thêm hai đỉnh ảo $$(1, 1)$$ và $$(n, m)$$ để tiện cài đặt.

ĐPT: $$O(k \times \log k)$$.

#### subtask 4:

Kết hợp nhận xét ở subtask 3 và cách dijktra, tối ưu ở subtask 2. 

[code](https://ideone.com/ffS0jP).

ĐPT: $$O(n + k \times \log(k))$$.

Ngoài ra, để tối ưu cho một hàng, ta có thể dùng min tiền tố và min hậu tố. [code ý tưởng này (very pain)](https://ideone.com/RiPmjz).

BONUS: hãy tìm cách dijkstra trực tiếp mà không TLE.

## BIRTHDAY

#### subtask 1:

Giả sử từng giá trị $$< 2^{11}$$ là kết quả. Để kiểm tra, chọn tất cả các cạnh là tập con của kết quả, xem đồ thị có liên thông hay không.

ĐPT: $$O(2^{11} \times m)$$.

#### subtask 2:

Làm như subtask 1. Nhưng vì các cạnh có trọng số phân biệt nên độ phức tạp là thời gian duyệt submask. Lưu trước $$edges[x]$$ là cạnh có trọng số $$x$$.

ĐPT: $$O(3^{15})$$.

#### subtask 3:

Ý tưởng chung cho tất cả các cách là: xây dựng đáp án theo tiền tố và duy trì một DSU theo tiền tố đã xây. Xét vị trí $$i$$ không thể đặt $$0$$ thì ta bắt buộc đặt $$1$$.

Để kiểm tra có đặt được $$0$$ hay không, ta join tất cả các cạnh mà trọng số có bit cao nhất $$< i$$. Nếu nó tạo ra đồ thị liên thông thì thoả mãn. 

Nếu không, ta phải đặt $$1$$ vào vị trí $$i$$. Khi đó xét các cạnh có bit thứ $$i$$, các cạnh có trọng số đúng bằng $$2^i$$ thì ta join vào DSU duy trì (luôn chọn vì nó không làm ảnh hưởng các bit nhỏ hơn), các cạnh khác thì ta tắt bit thứ $$i$$. Việc này nhằm xác nhận ở các bước sau có thể sử dụng cạnh thứ $$i$$ hay không. 

Tuỳ vào cách cài đặt có thể cho ra đpt $$O(n \log(n))$$ hoặc $$O(n \log^2(n))$$.


[code theo cách check trên](https://ideone.com/IghGEP).

[code check cách khác](https://ideone.com/Vm1n7n).