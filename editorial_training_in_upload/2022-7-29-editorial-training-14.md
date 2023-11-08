---
layout: post
published: true
title: editorial training 14
subtitle: 'I wanna see your smile girl, see your smile yeah yeah'
date: 2022/07/29
tags: [CP]
---

## Làm bánh



#### subtask 1:

$$\frac{b_1 + b_2 + .. + b_m}{1000 \times m} = \frac{n}{1000}$$.

$$\frac{b_1 + b_2 + .. + b_m}{m} = n$$.

Gọi $$dp[i][j] = 1$$ nếu ta lấy được $$i$$ kg nguyên liệu sao cho tổng độ ngọt là $$j$$. Ngược lại $$dp[i][j] = 0$$.

Có thể chứng minh, gọi $$max$$ là chặn trên độ ngọt của nguyên liệu. Ta chỉ lấy tối đa $$max$$ kg nguyên liệu. Thật vậy giả sử tồn tại hai nguyên liệu có độ ngọt $$x \le n \le y$$ (nếu không đáp án là $$-1$$). Ta lấy $$y - n$$ kg nguyên loại loại $$x$$ và $$n - x$$ kg nguyên liệu loại $$y$$. Tổng số kg đã lấy là $$(y - n) + (n - x) = y - x$$. Tổng độ ngọt là $$(y - n) \times x + (n - x) \times y = n \times (y - x)$$. Vậy luôn có một cách lấy $$y - x$$ $$(\le max)$$ kg nguyên liệu.

Bên cạnh đó $$n$$ tối đa là $$max$$.

Vậy ta được ĐPT: $$O(max^3 \times k)$$.

#### subtask 2:

Cải tiến subtask 1 bằng bitset.

ĐPT: $$O(\frac{max^3 \times k}{32})$$.

#### subtask 3:

$$b_1 + b_2 + .. + b_m = n \times m$$.

$$(b_1 - n) + (b_2 - n) + .. + (b_m - n) = 0$$.

Vậy mỗi phần tử ta trừ đi $$n$$ và ta đi tìm một tập hợp (có thể lặp) có tổng bằng $$0$$. 

Ta luôn chứng minh được tồn tại một cách lấy mà giá trị tuyệt đối của tổng các phần tử không bao giờ quá $$1000$$. Hay nói cách khác, giả sử ta lấy các kg nguyên liệu có độ ngọt là $$v_1, v_2, .., v_k$$. Ta luôn có cách sắp xếp sao cho giá trị tuyệt đối của tổng tiền tố không quá $$1000$$. Thật vậy, nếu tổng tiền tố đang xây là dương, ta thêm một phần tử âm (chưa lấy) vào. Nếu tổng tiền tố đang xây là âm, ta thêm một phần tử dương (chưa lấy) vào. Cách làm trên luôn thoả mãn vì $$\mid v_i \mid \le 1000$$. 

Nhờ chứng minh trên, ta biết được có tối đa $$2000$$ tổng có thể tạo ra (từ $$-1000$$ đến $$1000$$). Từ đây có nhiều hướng giải (bitset, dp). Nhưng mình xin giới thiệu cách bfs.

Ta tạo đồ thị $$2000$$ đỉnh. Từ $$u$$ có cạnh nối đến $$u + a_i - n$$. Ta cần tìm chu trình chứa đỉnh $$0$$ ngắn nhất. Ta chỉ đơn giản tìm đường đi ngắn nhất từ $$0$$ đến mọi đỉnh. Với mỗi $$i$$, lấy khoảng cách ngắn nhất từ $$0$$ đến $$n - a_i$$. Đáp án là khoảng cách ngắn nhất đó $$+1$$ vì ta chỉ cần thêm $$a_i - n$$ là thành chu trình.

[code](https://ideone.com/MtX4sy).

## Nhà cao tầng

#### subtask 1: 

Với mỗi độ cao $$h$$, ta làm như sau:

Gọi $$dp[i][j]$$ là đáp án nếu ta xây $$i$$ nhà được gcd là $$j$$. Nhận thấy, ta chỉ cần quan tâm gcd $$2 \times j$$, $$3 \times j$$, .. đã xây trước độ ở $$i - 1$$ ngôi nhà. Do đó ta chuẩn nếu gcd trước đó là $$x \times j$$ thì có bao cách chọn độ cao cho ngôi nhà thứ $$i$$ để được gcd mới là $$j$$. Ngoài ra gcd tối đa là $$h$$ nên ta giảm được thời gian chạy nhờ hằng số. 

ĐPT: $$O(\frac{k^2 \times n}{2} \times \log(k))$$

[code](https://ideone.com/YmF787).

#### subtask 2:

Với mỗi độ cao $$h$$, ta làm như sau:

Gọi số cách chọn ra dãy nhà có gcd bằng $$i$$ là $$f[i]$$. Số cách chọn ra dãy nhà có gcd chia hết cho $$i$$ là $$g[i]$$.

Vậy ta có công thức $$f[i] = g[i] - f[2 \times i] - f[3 \times i] - ..$$.

Khi tính $$g[i]$$, ta luôn biết mỗi căn nhà đều phải chia hết cho $$i$$. Gọi $$c[i]$$ là số các số chia hết cho $$i$$ nhỏ hơn hoặc bằng $$h$$. Vậy $$c[i] = \frac{h}{i}$$ và $$g[i] = c[i] ^ n$$.

ĐPT: $$O(\frac{k^2}{2} \times \log(k))$$.

#### subtask 3:

Ta diễn giải lại bài toán: số dãy có gcd là $$1$$ bằng tổng số lượng dãy trừ đi số dãy có gcd khác $$1$$.

Ta lưu số lượng dãy có gcd khác $$1$$ vào một biến $$sum$$ và cập nhật biến $$sum$$ này với mỗi độ cao $$h$$. Từ đó dễ dàng tính được kết quả. 

Có $$sum = f[2] + .. + f[h]$$.

Khi $$h$$ tăng lên $$1$$, ta nhận thấy chỉ những $$f[i]$$ với $$i (i \ge 2)$$ là ước của $$h + 1$$ thay đổi. Lúc này $$f[i]$$ bằng số cách tạo ra dãy có gcd bằng $$1$$ nếu độ cao tối đa là $$\frac{h + 1}{i}$$ (dễ thấy nếu ta nhân $$i$$ vào thì ta được dãy các dãy thoả mãn gcd bằng $$i$$ và độ cao tối đa là $$h + 1$$). Nhờ vào đó ta có thể cập nhật $$sum$$.

[code của idol siêu khủng](https://ideone.com/pDvmPh).

ĐPT: $$O(k \log k)$$.

## Xâu đối xứng

#### subtask 1:

Với mỗi truy vấn, ta for tất cả các xâu con và tính xem có bao cách khiến xâu con thành xâu đối xứng.

ĐPT: $$O(q \times n^3)$$.

#### subtask 2:

Nhờ tính chất các xâu con đối xứng đồng tâm, ta có thể một điểm $$i$$ làm tâm duyệt sang hai bên. 

Nếu hai vị trí đang xét:
- Có chữ cái giống nhau: ta có một cách chọn.
- Có chữ cái khác nhau: ta dừng vòng lặp.
- Một trong hai vị trí là `?`: có một cách chọn nếu chữ cái ở vị trí còn lại xuất hiện trong $$t$$, nếu không dừng vòng lặp.
- Cả hai vị trí là `?`: có $$\mid t \mid$$ cách chọn.

Các dấu `?` không trong xâu đối xứng đang duyệt luôn có $$\mid t \mid$$ cách chọn.

ĐPT: $$O(q \times n^2)$$.

#### subtask 3:

Với mỗi $$\mid t \mid$$ (tối đa $$17$$) ta chuẩn bị đáp án riêng biệt. Nếu một trong hai vị trí là `?`, ta biết được tập hợp những chữ cái cần để có thể tính xâu đang xét vào đáp án.

Với mỗi truy vấn, ta duyệt các tập hợp con của xâu truy vấn và cộng các kết quả đã chuẩn bị vào. 

ĐPT: $$O(n^2 \times 17 + q \times 2^{17})$$.

#### subtask 4: 

Sau bước chuẩn bị như subtask 3 thì ta cần chuẩn bị thêm đáp án với tất cả các xâu. 

ĐPT: $$O(n^2 \times 14 + 3^{14} + q)$$.

#### subtask 5: 

Dùng DP SOS tính trước tổng các tập con.

[code]()

ĐPT: $$O(n^2 \times 17 + 2^{17} \times 17^2 + q)$$.