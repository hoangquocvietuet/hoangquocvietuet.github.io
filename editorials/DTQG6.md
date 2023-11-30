---
layout: blog-post
title: "DTQG #6 Editorial"
date: '2023-11-29'
aside: false
sidebar: false
---

# Bài 1

$19 \times a_i + 19 \times a_j + 6 \times a_k$ chia hết cho $6$ hoặc $7$. 

Điều kiện trên tương đương với:
- $a_i + a_j$ chia hết cho $6$.
- Hoặc, $2 \times (a_i + a_j) + a_k$ chia hết cho $7$.

Nếu đếm mỗi trường hợp rồi cộng vào thì sẽ thừa những phần tử trùng nhau ở cả $2$ trường hợp. Lúc này bù trừ rất là khó. Ta sẽ không đếm riêng như vậy.

Ta cố định phần tử $a_k = x$. Lúc đó ta duy trì một mảng $cntPairs(y):$ số cặp phần tử $i, j$ thoả mãn $a_i < a_j < a_k$ và $a_i + a_j = y$. Khi $a_k$ tăng lên $x + 1$ thì ta biết $a_j$ sẽ kết nạp thêm các phần tử có giá trị $x$, ta chỉ việc duyệt các giá trị có thể của $a_i$ và cập nhật mảng $cntPairs(y)$ trên. 

Sau khi cố định phần tử $a_k = x$ và cập nhật được mảng $cntPairs(y)$ như trên, ta duyệt giá trị $a_i + a_j = y$ từ $x + 1$ trở đi để tính. Nếu $y$ thoả mãn chia hết cho $6$ hoặc $y$ thoả mãn $2 \times y + x$ thì ta biết được số bộ ba $i, j, k$ cho ra giá trị $y - x$. Giả sử có $cnt$ bộ. Lúc này nhân vào đáp án $(y - x)^{cnt}$. Chú ý có sử dụng phép luỹ thừa nhanh để tính.

Bài này hay ở chỗ, cái giá trị của mình chứa $a_i + a_j$, điều kiện cũng chứa $a_i + a_j$ nên mình có thể nghĩ đến việc nhóm chúng vào.

# Bài 2

Những bài đếm bộ có $gcd = 1$ thì ta thường nghĩ đến cách bao hàm loại trừ quen thuộc. Gọi $f(i)$ là số cách chọn ra bộ ba có $gcd$ chia hết cho $i$. Gọi $dp(i)$ là số cách chọn ra bộ ba có $gcd = i$. Ta sẽ lấy $f(i)$ trừ đi $dp(i \times 2), dp(i \times 3), dp(i \times 4), v..v$ để ra $dp(i)$.

Vấn đề là đi tính $f(i)$ nhanh. Ta thấy gcd của một bộ ba chỉ ảnh hưởng bởi thằng min và max. Do đó ta có thể duyệt min và max, kiểm tra xem min và max có chia hết cho $i$ không và cộng vào $f(i)$ số lượng thằng ở giữa min và max. Cách làm vừa rồi sẽ tốn $O(A^2)$. 

Nhận xét tiếp theo là ta chỉ duyệt min và max chia hết cho $i$. Tuy vậy thời gian chạy trong trường hợp $i = 1$ vẫn là $O(A^2)$. Nhưng ta nhận thấy là số lượng thằng ở giữa min và max có thể dùng tổng tiền tố để tính nhanh. Thật vậy, gọi min = $j$, max = $k$, mảng tổng tiền số số lượng là $cnt$, thì ta sẽ lấy $cnt(k - 1) - cnt(j)$. Nếu cố định $j$, ta sẽ có $k_1, k_2, k_3, ...$ là các giá trị max có thể. Lúc đó ta chỉ cần lưu tổng $cnt(k_1 - 1), cnt(k_2 - 1), ...$ vào một biến $sum$ để tính nhanh.

Độ phức tạp chỉ là $O(n \log n)$ vì ta duyệt như sàng nguyên tố.

# Bài 3

Chứng minh đáp án tối thiểu là $x$ và tối đa là $x + 2$ với $x$ là số lượng phần tử $0$. Thật vậy, các phần tử bằng $0$ ta phải tăng lên ít nhất $1$ để chúng có bit bật $\rightarrow$ đáp án tối thiểu là $x$. Mặt khác, ta có thể chứng minh luôn xây dựng được đồ thị liên thông qua tối đa $2$ phép nữa:
- Xét số $A$ có vị trí của bit $1$ thấp nhất là $pos$ và $pos$ cao nhất. Nếu $A$ là duy nhất thì ta chỉ việc lấy $A - 1$ là sẽ bật các bit $0$ ở sau $pos$. Lúc đó tất cả các đỉnh khác đều có cạnh đến đỉnh này.
- Nếu $A$ không phải duy nhất, mà tồn tại $B$ cũng có bit $1$ thấp nhất là $pos$. Thì $A - 1$ sẽ có thể không liên thông với $B$. Ta chỉ cần thêm một phép là $B + 1$.

Vậy chỉ cần tối đa thêm $2$ phép. Ta sẽ đi check có dùng $0$ phép được không, có dùng $1$ phép được không. Nếu không thể thì in ra $2$ là được.