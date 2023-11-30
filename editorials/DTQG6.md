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

Bài này tưởng khó nhưng lại rất đơn giản. Giả sử ta có một số nhị phân sau: $.....10000000$. Nếu lấy số đó trừ đi $1$, ta sẽ tắt bit $1$ nhỏ nhất và bật các bit $0$ ở phía trước.

Vậy ta sẽ trừ $1$ đi ở số có bit $1$ nhỏ nhất là lớn nhất. Lúc đấy chắc chắn các số khác sẽ có bit $1$ ở cùng vị trí với số này. Cách làm trên sẽ sai ở trường hợp tồn tại hai số có bit $1$ nhỏ nhất là lớn nhất. Gọi là $A$ và $B$. Nếu giảm $A$ đi một đơn vị thì $B$ không còn liên thông với $A$ nữa. Việc ta cần làm là cộng thêm $1$ vào $B$. Có thể chứng minh đáp án không quá $2$ và cách làm trên là tối ưu.

Lưu ý TH những thằng bằng $0$, ta phải cộng lên ít nhất $1$.