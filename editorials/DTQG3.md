---
layout: blog-post
title: "DTQG #3 Editorial"
date: '2023-11-17'
aside: false
sidebar: false
---

# Bài 1

Khi làm những bài đếm palindrome, ta thường nghĩ đến việc "đi từ giữa ra". Có [thuật toán manacher](https://vnoi.info/wiki/algo/string/manacher.md) cũng chung suy nghĩ như vậy. 

Dễ thấy đây là một bài quy hoạch động đếm. Kết hợp với ý tưởng đi từ giữa trên, ta sẽ chia đường đi từ $(1, 1)$ đến $(n, m)$ thành đường đi từ $(1, 1)$ đến giữa và từ $(n, m)$ đến giữa.

Gọi trạng thái $dp(i, j, h, k)$ là số đường đi palindrome tạo được nếu chỉ xét đường đi xuất phát từ $(1, 1)$ đang kết thúc tại $(i, j)$ và đường đi xuất phát từ $(n, m)$ đang kết thúc tại $(h, k)$. Lúc này để cập nhật ta chỉ việc for các ô tiếp theo.

Tuy nhiên cách làm trên chưa fit với giới hạn $n \le 500$. Ta nhận thấy là $4$ chiều $(i, j, h, k)$ không thật sự cần thiết. Vì nếu biết $(i, j, h)$ ta sẽ suy ra được $k$. Do đó ta giảm được một chiều. 

# Bài 2

Bài này ta nghĩ ngay đến đếm contribution vì biểu thức $f(l, r)$ có vẻ tách được ra. Xét mọi vị trí $i$ trong dãy $a$. Ta sẽ đếm xem $a_i$ đóng góp bao nhiêu bao đáp án.

Thật vậy, nếu xét một đoạn $[l, r]$ chứa $i$, giả sử đoạn này có $cnt$ số nhỏ hơn $a_i$, ta sẽ biết là $a_i$ đóng góp vào đáp án một lượng $a_i \times (cnt + 1) = a_i \times cnt + a_i$. Tuy nhiên duyệt qua hết $i$, $l$ và $r$ không phải cách làm AC.

Ta thấy thật ra $a_i \times cnt$ là tổng của $cnt$ giá trị $a_i$ nên ta có thể chia ra làm hai khoảng $[l, i)$ và $(i, r]$ riêng biệt (có thể hiểu là khoảng $1$ đóng góp $cnt_1 \times a_i$, khoảng $2$ đóng góp $cnt_2 \times a_i$ với $cnt_1 + cnt_2 = cnt$). Ta chuyển bài toán thành xét bộ ba $(j, i, h)$ với ý nghĩa $l \le j < i \le h \le n$, hoặc $1 \le h \le i < j \le n$ sẽ đóng góp bao nhiêu vào đáp án. 

Chú ý một phần $a_i$ còn thừa ở công thức. Phần này phải cộng riêng ra.

Giải với TH1 (còn TH2 tương tự): giờ nếu ta duyệt $i$ và duyệt $j$, ta sẽ lấy mọi $i \le h \le n$. Bộ ba $(j, i, h)$ trong TH này sẽ đóng góp $a_i \times k$ vào đáp án với $k$ là số lượng số bé hơn $a_i$ trong khoảng $[j, i)$. Bỏ qua $h$ (vì mọi $h$ đều như nhau) thì đáp án sẽ tăng thêm một lượng là $a_i \times k \times (n - i + 1)$. Cách làm này mất $O(n^2)$. Để cải tiến, ta viết thêm:

Giả sử các vị trí $a_j < a_i$ lần lượt là $1 \le j_1 < j_2 < ... < j_m < i$.

Với $j$ trong đoạn $[j_m + 1, i)$, đáp án sẽ tăng thêm một lượng $a_i \times (n - i + 1) \times 0$.

Với $j$ trong đoạn $[j_{m - 1} + 1, j_m]$, đáp án sẽ tăng thêm một lượng $a_i \times (n - i + 1)  \times 1$.

...

Với $j$ trong đoạn $[1, j_1]$, đáp án sẽ tăng thêm một lượng $a_i \times (n - i + 1)  \times m$.

Tạm thời bỏ qua $a_i \times (n - i + 1)$ vì đây là hằng số. Ta tách công thức toán:

$m \times j_1 + (m - 1) \times (j_2 - j_1) + (m - 2) \times (j_3 - j_2) + ... + (m - (m - 1)) \times (j_m - j_{m - 1})$ $=$ $j_1 + j_2 + ... + j_m$.


Ví dụ có các vị trí:

$j_1 = 3$, 
$j_2 = 6$,
$j_3 = 13$,
$i = 15$.

$7 \rightarrow 13$ tăng $1$

$4 \rightarrow 6$ tăng $2$

$1 \rightarrow 3$ tăng $3$

Tổng tăng: $7 \times 1 + 3 \times 2 + 3 \times 3 = j_1 + j_2 + j_3 = 3 + 6 + 13 = 22$.

Chứng minh xin nhuòng bạn đọc.

Từ đây, ta có cách làm là lấy tổng $j$ thoả mãn $j < i$ và $a_j < a_i$. Để duy trì việc này, có thể dùng segment tree.

TH2 tương tự cách làm trên, toán cũng tách ra tương tự.


# Bài 3

Ta thực hiện thao tác gán nếu cả đoạn bằng $0$, truy vấn $2$ vào một phần tử bằng $0$ thì ta chỉ việc in ra.

Giờ ta cần quan tâm xem phần tử $i$ có thể bằng $1$ hay `N/A`. Để phần tử $i$ bằng $1$ thì ta phải có một truy vấn $(1, L, R, 1)$ với $L \le i \le R$ trước đó, và ta cũng cần đảm bảo rằng $R - L$ phần tử còn lại được xác định bằng $0$ rồi. 

Ta sẽ tìm hai vị trí $X$, $Y$ xa nhất sao cho $X, i - 1$ toàn $0$ và $i + 1, Y$ toàn $0$. Ta cần biết có truy vấn $(1, L, R, 1)$ nào với $X \le L \le i \le R \le Y$ không. Để xử lí, ta dùng $2$ segment tree, một segtree lưu các vị trí $0$, có thao tác gán và cnp trên cây. Một segtree lưu min các $R$ khi gặp các truy vấn $(1, L, R, 1)$. Không xảy ra trường hợp $R < i$ vì các truy vấn được giả định là đúng.