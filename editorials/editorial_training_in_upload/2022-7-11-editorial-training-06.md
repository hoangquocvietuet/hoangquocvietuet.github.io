---
layout: post
published: true
title: editorial training 06
subtitle: 'Ung Quang Trí will win IOI 2023'
date: 2022/07/11
tags: [CP]
---

## COVERCIR

#### subtask 1:

Mỗi robot có 2 lựa chọn đi thẳng hoặc quay đầu. 

ĐPT: $$O(n^2 \times 2^n)$$.

#### subtask2: 

Giả sử $$u < v$$. Coi đường tròn chia làm 2 cung: $$u$$ đến $$v$$ và phần còn lại.

Ta nhận thấy mỗi robot không bao giờ đi qua vị trí ban đầu của robot kia. Và mỗi cung tròn sẽ chia ra 2 phần, chúng sẽ chia ra để cover một phần.

Minh hoạ: ![](/img/training06.png).

Do đó ta có thể for 2 đầu mút mà 1 robot sẽ đi. Suy ra được 2 đầu mút robot còn lại. Việc tìm thời gian ít nhất để mỗi robot hoàn thành phần đường của mình tương đối đơn giản (phần thời gian robot quay lại $$\times 2$$).

ĐPT: $$O(n^2)$$.

#### subtask3: 

Ta for một đầu mút robot sẽ đi như subtask 2. Nhưng đầu mút còn lại, ta chặt nhị phân để tìm vị trí sao cho thời gian đi robot 1 $$\le$$ thời gian đi robot 2. Gọi vị trí đó là x. Ta lấy min kết quả ở ba vị trí $$x, x - 1$$ và $$x + 1$$.

ĐPT: $$O(n \times \log(n))$$.

#### subtask 4:

Nếu $$u = v$$, kết quả là $$\frac{n}{2}$$.

Nếu cung nhỏ giữa $$u$$ và $$v$$ không có điểm nào nữa, kết quả là $$\frac{n + 1}{2} - 1$$.

Trong các trường hợp còn lại, sẽ chỉ có 1 robot đi lại đường cũ. Việc ta cần làm là tối ưu xem nó nên đi theo cung nhỏ trước hay cung lớn trước. 

ĐPT: $$O(1)$$. 

Đây là một bài Toán cần nhiều nhận xét và tưởng tượng khi cài đặt. Khuyến khích làm 3 subtasks đầu. 

## SUBPERMUTATION

#### subtask 1:

Vì chỉ có $$\sqrt{n}$$ giá trị khác nhau nên độ dài tối đa của đoạn con cần tìm là $$\sqrt{n}$$. Do đó ta có thể for 2 chỉ số $$(i, j)$$. Để kiểm tra đoạn $$[i, j]$$ thoả mãn, ta cần duy trì mảng tần số xuất hiện và giá trị lớn nhất của đoạn.

ĐPT: $$O(n \times \sqrt{n})$$.

#### subtask 2: 

Trong lớp bài toán xét tất cả các đoạn con, ta có thể nghĩ đến phương pháp [chia để trị](https://mzhang2021.github.io/cp-blog/divide-and-conquer/).

Quy về bài toán xét đoạn $$[l, r]$$, có $$mid = \frac{l + r}{2}$$, ta cần đếm số cặp $$(i, j)$$ thoả mãn  $$l \le i \le mid < mid + 1 \le j \le r$$ và $$a_i, a_{i + 1},.., a_{j}$$ là một hoán vị từ $$1$$ đến $$j - i + 1$$. 

Gọi chỉ số có giá trị max là $$k$$. Ta chia làm 2 trường hợp:
- Giả sử $$mid + 1 \le k \le j$$. Khi đó $$i = j - a_k + 1$$. Việc cần làm bây giờ là kiểm tra $$i$$ có thoả mãn không?
- Giả sử $$i \le k \le mid$$. Khi đó $$j = i + a_k - 1$$. Việc cần làm bây giờ là kiểm tra $$j$$ có thoả mãn không?

Để kiểm tra một đoạn liên tiếp có phải hoán vị không, ta dùng [xor hashing](https://codeforces.com/blog/entry/85900). Ý tưởng chính: ánh xạ mỗi số từ $$1$$ đến $$n$$ thành một số random 64 bit.

[code](https://ideone.com/rmCaSd).

ĐPT: $$O(n \log(n))$$.

## Light

#### subtask 1: 

For danh sách kề và kiểm tra.

ĐPT: $$O(q \times n)$$.

#### subtask 2:
Chọn một số $$B$$ bất kì:
- Gọi đỉnh nhẹ là các đỉnh có độ lớn danh sách kề nhỏ hơn hoặc bằng $$B$$.
- Gọi đỉnh nặng là các đỉnh có độ lớn danh sách kề lớn hơn $$B$$.

Xử lí truy vấn:
- $$u$$ là đỉnh nặng. Các cạnh màu xanh sẽ chuyển sang đỏ, các cạnh màu đỏ sẽ chuyển sang xanh. Do đó ta cần lưu thông tin $$green_u$$ và $$red_u$$ để biết số màu xanh thay đổi. Bên cạnh đó, ta cần cập nhật cho các đỉnh nặng $$v$$ kề với $$u$$: thông tin $$green_v$$ và $$red_v$$.
- $$u$$ là đỉnh nhẹ. Ta duyệt qua danh sách kề của $$u$$. Gọi đỉnh đang xét là đỉnh $$v$$. Nếu $$v$$ là đỉnh nhẹ, thay đổi màu cạnh như thường. Nếu $$v$$ là đỉnh nặng, ta cần có thêm thông tin $$cnt_v$$ - số lần truy vấn $$v$$ trước đó, để tìm ra màu hiện tại của cạnh $$u, v$$. Sau đó ta cần cập nhật $$green_v$$ và $$red_v$$.

[code](https://ideone.com/5ninWa).

Nhận xét: có tối đa $$\frac{n}{B}$$ đỉnh nặng và độ lớn tối đa của danh sách kề đỉnh nhẹ là $$B$$. Do đó ĐPT là: $$O(q \times \max(B, \frac{n}{B}))$$.  Chọn B bằng $$\sqrt{n}$$ để đạt được ĐPT tối ưu. 

