---
title: "editorial training 19"
---

## Tìm số

#### subtask 1:

Từ $$10^6 + 1$$ đến $$2 \times 10^7$$ có nhiều hơn $$k$$ số nguyên tố. Do đó ta biết được chặn trên của đáp số. Thực tế thời gian chạy sẽ nhanh hơn nhiều.

#### subtask 2:

Vì $$p$$ là số nguyên tố nên đáp án luôn là $$x + 1 + k - 1 = x + k$$.

ĐPT: $$O(t)$$.

#### subtask 3:

$$p$$ có tối đa một ước nguyên tố nên $$p = a^b$$ với $$a$$ là số nguyên tố. Vậy những số $$y$$ có chứa thừa số nguyên tố $$a$$ luôn không thoả mãn. Ta chỉ cần tìm xem số hạng lớn thứ $$k$$ không chứa thừa số nguyên tố $$a$$. 

Gọi $$d$$ là một số bất kì có tính chất chia hết cho $$a$$. Vậy dãy số ta sẽ có dạng: $$..., d_1, d_1 + 1, ..., d_2, d_2 + 1, ...$$. Nhiệm vụ của ta chỉ là dùng Toán để tính.

Tất nhiên ta cũng cần chuẩn bị mảng $$primeDiv[i]$$ là số nguyên tố bất kì mà $$i$$ chia hết.

ĐPT: $$O(A \times \log(\sqrt{A}) \times t)$$.

#### subtask 4:

Ta vẽ sơ đồ ven. Sau đó ta dùng chặt nhị phân. Giả sử chặn trên của đáp án là $$tmp$$ thì ta tìm được bao nhiêu số thoả mãn.

ĐPT: $$O(t \times \log(A))$$.

#### subtask 5:

Subtask $$4$$ đã gợi ý cho ta dùng bao hàm loại trừ. Ta phân tích $$p$$ ra thừa số nguyên tố và chọn tập ước nguyên tố của $$p$$ để đếm. 

Vì $$p$$ có tối đa $$7$$ ước nguyên tố nên ĐPT là $$O(t \times \log(A) \times 2^7)$$.

## Đường một chiều

#### subtask 1:

Với mỗi cặp $$(u-v)$$ cần liên thông, ta tìm tất cả đường đi từ $$u$$ đến $$v$$. Nếu cạnh $$(i-j)$$ nằm trên đường đi từ $$u$$ đến $$v$$ và tất cả các cách phải đi qua cạnh này thì ta biết được chiều của cạnh $$(i-j)$$.

Các cạnh còn lại không xét đến, đáp số luôn là `B`.

ĐPT: $$O(q \times n \times m)$$.

#### subtask 2:

Ta tách đồ thị ra nhiều thành phần song liên thông. Đáp án của các cạnh trong thành phần song liên thông luôn là `B`. Khi đó ta nối cạnh giữa các thành phần song liên thông nếu nó chứa cạnh giữa hai đỉnh nằm trong hai thành phần. Ta được đồ thị mới là một cây.

Khi đó với mỗi cặp $$(u-v)$$ cần liên thông, nếu nó khác thành phần song liên thông, ta chỉ cần duyệt qua các cạnh ở đồ thị mới để đánh dấu chiều.

ĐPT: $$O(q \times m)$$.

#### subtask 3:

Vẫn nén đồ thị như subtask. Ta chỉ cần cải tiến việc đánh dấu đồ thị. Nhận xét: nếu một cạnh được đánh dấu thì không bao giờ thay đổi nữa (tồn tại phương án như vậy vì đồ thị mới là cây). Do đó, ta hơi thay đổi một chút là đánh dấu đỉnh con, coi như đánh dấu cạnh con đến cha. Lưu mảng $$nxt[u]$$ là đỉnh tổ tiên gần nhất chưa được đánh dấu nếu xét đỉnh $$u$$. 

Vì mỗi cạnh chỉ được xét một lần nên ĐPT là: $$O(q + m)$$.
 
## Trò chơi ghép xâu

#### subtask 1:

Ta chọn ra hai tập con không giao nhau và thử xem có thể tạo được xâu $$b$$ hay không.

ĐPT: $$O(2^l \times 2^l)$$.

#### subtask 2:

Ta chọn ra một trong hai tập con. Trong các phần tử chưa được chọn của xâu $$a$$, ta có thể dùng tham lam để xem tạo được xâu $$b$$ hay không.

ĐPT: $$O(2^l)$$.

#### subtask 3:

Ta giả sử vị trí $$mid$$ sẽ chia xâu $$b$$ ra làm hai xâu.

Gọi $$dp[i][j][h] = 0/1$$ với ý nghĩa có thể dùng $$i$$ vị trí đầu tiên và tạo được tiền tố độ dài $$j$$ của xâu thứ nhất, tiền tố độ dài $$h$$ của xâu thứ hai hay không.

Tuỳ vào kí tự $$i + 1$$ và $$j + 1$$, $$h + 1$$, ta có thể cập nhật được trạng thái $$dp$$.

ĐPT: $$O(l^4)$$.

#### subtask 4:

Ta vẫn duyệt $$mid$$ như subtask 3.

Ta gọi $$f[j][h]$$ là vị trí $$i$$ nhỏ nhất mà $$dp[i][j][h] = 1$$ theo subtask 3. Nếu không tồn tại $$i$$, ta coi $$f[j][h] = 10^9$$. Nhận thấy vị trí $$f[j][h]$$ luôn tối ưu nhất do ta càng có nhiều "khả năng" thêm các kí tự mới.

ĐPT: $$O(l^3)$$.

[code](https://ideone.com/IaCGnh).