---
layout: blog-post
title: "Editorial deptrai2k7 #8"
date: '2022-09-26'
aside: false
sidebar: false
---

## Parabolic

#### subtask 1:

Ta sinh tất cả hoán vị và tính số phép hoán đổi cần. Giả sử có hoán vị $a = [3, 1, 2, 4, 5]$ thì ta cứ lần lượt hoán đổi $3$về vị trí đầu, $1$ về vị trí thứ hai, ...

ĐPT: $O(n! \times n^2)$.

#### subtask 2:

Ta chỉ cần kiểm tra dãy có thoả mãn điều kiện hay không. Nếu có đáp án là $0$, nếu không đáp án hiển nhiên là $1$.

#### subtask 3:

Xét phần tử có giá trị lớn nhất. Ta cần chuyển nó về đầu dãy hoặc cuối dãy. Nhận thấy dù chuyển về đầu hay cuối thì dãy còn lại vẫn liên tiếp và không ảnh hưởng đáp án. Do vậy ta xét vị trí của phần tử này để quyết định xem chuyển về đầu hay cuối sẽ tốt hơn (cần ít phép hoán đổi hơn). Cứ làm vậy với các phần tử khác theo thứ tự giảm dần.

ĐPT: $O(n^2)$.

#### subtask 4:

Ta không thể thực hiện phép hoán đổi trực tiếp như subtask 3. Ta quy ước mỗi phần tử trong dãy có giá trị là $1$. Nếu ta chuyển nó về đầu hoặc cuối, giá trị sẽ trở thành $0$. Do đó ta dễ dàng tính được số phép hoán đổi cần (lấy tổng) để chuyển về đầu hoặc cuối. 

ĐPT: $O(n \times \log(n))$.

## Candy

#### subtask 1:

Ta duyệt nhị phân những viên kẹo sẽ chọn. Nếu có $k$ viên kẹo và các viên kẹo thoả mãn không nằm cạnh nhau thì tăng đáp án.

ĐPT: $O(2^n \times n)$.

#### subtask 2:

Gọi $dp[i][j][0/1]$ là án nếu xét $i$ viên kẹo đầu tiên và chọn ra $j$ viên kẹo thoả mãn và viên kẹo cuối cùng có phải là viên kẹo thứ $i$ không.

Ta có công thức $dp[i + 1][j + 1][1] += dp[i][j][0]$ và $dp[i + 1][j][0] += dp[i][j][0] + dp[i][j][1]$. 

Đáp án là $dp[n][k][0] + dp[n][k][1]$.

Tất nhiên có cách bỏ chiều $[0/1]$ đi :>

#### subtask 3:

Ta xếp trước $k$ viên kẹo thành hàng. Lúc này ta sẽ có $k + 1$ khoảng trống để đặt $n - k$ viên kẹo còn lại. Bên cạnh đó $k - 1$ khoảng trống giữa hai viên kẹo liên tiếp phải có ít nhất một viên kẹo. Do đó ta coi như đặt $k - 1$ viên kẹo vào và sau cùng bài toán trở thành: cần đặt $n - 2 \times k + 1$ viên kẹo vào $k + 1$ khoảng trống (có thể có khoảng trống đặt $0$ viên). Đây chính là bài toán chia kẹo euler. 

Đáp số $\binom{n - 2 \times k + 1 + k + 1 - 1}{k + 1 - 1}$ = $\binom{n - k + 1}{k}$. 

ĐPT: $O(n - k + 1)$.

#### subtask 4:

Việc khó khăn duy nhất bây giờ là tính tổ hợp với $n \le 10^9$.

Có công thức $\binom{n}{k}$ = $\binom{n}{k - 1} \times \frac{n - k + 1}{k}$.

ĐPT: $O(k)$.

## Hercules

#### subtask 1:

Ta quay lui để điền vào các ô các giá trị. Sau đó chỉ cần đếm số lượng ô đỉnh.

ĐPT: $O(k^{n \times m} \times n \times m)$.

#### subtask 2:

Vì $k = 2$ nên các ô đỉnh sẽ có giá trị $2$, các ô còn lại luôn có giá trị $1$. Hai ô đỉnh khác nhau phải nằm trên hai hàng khác nhau và hai cột khác nhau. 

Giả sử $n \le m$, ta chỉ có tối đa $n$ ô đỉnh. Xét cách điền có $g (g \le n)$ ô đỉnh. Ta cần chọn ra $g$ hàng. Mỗi cách chọn hàng, ta cần chọn có thứ tự $g$ cột để ghép tương ứng các hàng. Vậy có $C^g_n \times A^g_n$ cách chọn ra $g$ ô đỉnh. Các ô cùng hàng hoặc cùng cột những ô được chọn này hiển nhiên phải là $1$. Tuy nhiên vẫn còn thừa một số ô khác, việc đếm chính xác $g$ ô đỉnh là rất khó khăn. 

![](https://cdn.discordapp.com/attachments/882938535886348288/1023897727731507210/unknown.png)

Trong ví dụ trên, ta thấy còn thừa $8$ ô không được chọn. Nếu đếm chính xác $g$ ô đỉnh, ta không biết phải chọn $1$ hay $2$ vào các ô này. 

Ta chuyển hướng sang việc tính $B(g)$: số cách chọn ra ít nhất $g$ ô đỉnh. Vậy $B(g) = C^g_n \times A^g_n \times k^{(n - i) \times (m - i)}$.  

Ta có công thức bao hàm loại trừ: $A(g) = B(g) - C^g_{g+1} \times A(g + 1) - C^g_{g+2} \times A(g+2) - ...$.

ĐPT: $O(n^2)$.

#### subtask 3:

Vì $k \le 200$ nên lúc này giá trị các ô cùng hàng hoặc cùng cột với các ô đỉnh cũng rất quan trọng. Trong những bài toán như này, ta nghĩ ngay đến quy hoạch động. 

Nhận thấy: nếu ta shuffle hai hàng và hai cột của hai ô đỉnh khác nhau, kết quả không thay đổi. Nhờ vậy nếu xét $g$ ô đỉnh, ta coi như $g$ ô đấy nằm ở $g$ ô đầu đường chéo chính, nói cách khác là các vị trí $(1, 1)$, $(2, 2)$, ..., $(g, g)$. Việc này giúp ta dễ dàng tưởng tượng cách quy hoạch động hơn. 

![](https://cdn.discordapp.com/attachments/882938535886348288/1023932069123981323/unknown.png)

Ngoài ra ta sẽ đặt các ô đỉnh theo thứ tự giá trị không giảm. Khi đó, ta không cần quan tâm các ô cùng hàng hoặc cùng cột với các ô đỉnh nữa. Bởi lẽ chúng luôn bị giới hạn bởi ô đỉnh đầu tiên ảnh hưởng. Ví dụ: 
- các ô $1$ được điền đầu tiên, sẽ giới hạn giá trị của các ô đỏ. 
- Các ô $2$ được điền thứ hai, sẽ giới hạn giá trị của các ô vàng. 
- Các ô $3$ được điền sau cùng, sẽ giới hạn giá trị của các ô xanh xám. 

Gọi $dp[i][j]$ là số cách chọn ra $i$ ô đỉnh theo cách trên và ô hiện tại có giá trị là $j$. Ta sẽ chọn ra $h$ ô trong $i$ ô để điền giá trị $j$. Khi đó số lượng ô cùng hàng hoặc cùng cột với $h$ ô đỉnh này sẽ là $h * (n + m - 2 * (i - h)) - h * h - h$ (các bạn tự nháp để ra). Như đã phân tích, giá trị tối đa của các ô này sẽ là $j - 1$. Vậy ta có công thức:

$dp[i][j] = \sum_{h=0}^i dp[i-h][j-1] \times C^h_i \times (j - 1)^{h * (n + m - 2 * (i - h)) - h * h - h}$

Đến đây ta tính phần bù như subtask $2$ là xong. Lưu ý: $dp$ chỉ xét cách chọn theo đường chéo chính. Không phải toàn bộ số cách (trước khi shuffle).

ĐPT: $O(n^2 \times k)$.

#### subtask 4:

Ta biến đổi:

$\sum_{g = 0}^{n \times m} (g + 1) \times A(g)$

$=$

$\sum_{g = 0}^{n \times m} A(g) + \sum_{g = 0}^{n \times m} g \times A(g)$

Vế trái hiển nhiên bằng $k^{n \times m}$. Ta chỉ cần quan tâm vế phải:

$\sum_{g = 0}^{n \times m} g \times A(g)$

$=$

$\sum_{g = 0}^{n \times m} A(g) + A(g) + ... + A(g)$

Xét một cách có $g$ ô đỉnh bất kì. Nó đóng góp vào $A(g)$ một lần nên đóng góp vào cả biểu thức $g$ lần. Vậy ta có thể coi là mỗi ô đỉnh trong cách này đóng góp vào đáp án một lần, có $g$ ô như thế (đáp án không thay đổi, chỉ là paraphrase). Vì mỗi ô chỉ đóng góp vào kết quả khi nó là ô đỉnh nên với mỗi ô trong $n \times m$ ô, ta chỉ cần đếm số lượng bảng nhận nó là ô đỉnh. NGoài ra các ô có tính tổng quát nên ta có thể tính nhanh hơn. Đáp số:

$k^{n \times m} + \sum_{i = 1}^k n \times m \times (i - 1)^{n + m - 2} \times k^{(n - 1) \times (m - 1)}$

ĐPT: $O(k)$.

#### subtask 5:

Ta có tính chất $a^p \% mod = a^{p \% (mod - 1)} \% mod$ nên có thể làm được với $n, m$ lớn. 