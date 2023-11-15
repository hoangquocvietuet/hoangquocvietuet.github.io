---
layout: blog-post
title: "DTQG #1 Editorial"
date: '2023-11-15'
aside: false
sidebar: false
---

# Bài 1

Thêm hai thành phố "ảo" tại khoảng cách $0$ và $d$. Ta cần di chuyển từ thành phố thứ $0$ đến thành phố thứ $m + 1$.

Xét quãng đường di chuyển giữa hai thành phố $L$ và $R$. Ta đang có bình xăng đang chứa $X$ lít. Ta xây dựng hàm tính đáp án: $F(L, R, X)$.

Giả sử thành phố xăng rẻ nhất giữa hai thành phố $L$ và $R$ là thành phố $i$. Ta biết chắc rằng nên ưu tiên mua xăng ở thành phố $i$ nhất. Do đó ta gọi đến $F(L, i, X)$. Hàm $F$ sẽ trả về số tiền nhỏ nhất và số xăng còn lại (có thể phải mua thêm vừa đủ để đến được $R$). Sau đó mới lấy số lượng xăng còn lại, giả sử là $Y$, để gọi tiếp hàm $F(i, R, Y)$.

Ta thấy cách làm trên giống mô hình chia để trị, mỗi lần ta chia $L, R$ ra thành $L, i$ và $i, R$. Thực tế ta không duyệt từ $L$ đến $i$ hay từ $i$ đến $R$ như chia để trị. Mỗi giá trị $i$, ta chỉ xét duy nhất một lần. Hàm $F$ sẽ chỉ mất $O(n)$. 

Vậy ĐPT là $O(n \times log)$ do ta cần sort và chuẩn bị mảng thưa để tìm min.

# Bài 2

Nhận thấy là ta luôn phải ưu tiên những thành phố có giá xăng là $c = 1$. Do đó ta đi tìm cách xây dựng hai mảng:

- nxt(i, j): trạm xăng thứ $2^j$ sau $i$ có giá xăng bằng $1$.
- cost(i, j): chi phí để di chuyển đến trạm xăng trên.

Gấp đôi mảng và ta cứ nhảy theo sparse table.

# Bài 3

Xét $x = min_{1 \le i < j \le k} |v_i - v_j|$, ta thấy rằng để tính đáp án chính xác bằng $x$ sẽ rất khó. Do đó ta nghĩ tới việc tính đáp án cho các dãy có độ chênh vênh $\ge x$. 

Sắp xếp lại dãy, lúc này độ chênh vênh của dãy luôn là min của hiệu giữa hai phần tử liên tiếp được chọn. Ta gọi $dp(i, j)$ là số dãy có độ chênh vệnh $\ge x$ nếu xét đến $i$, đã chọn $j$ phần tử. Nếu chọn $i$, phần tử liền trước $i$ phải là $j$ với $a_i - a_j \ge x$. Do đó ta có thể dùng hai con trỏ và tổng tiền tố để tối ưu. 

Tổng tìm được sẽ là $dp(n, k) \times x$. Ta trừ đi tổng khi tính cho $x + 1$ sẽ ra tổng khi độ chênh vênh đúng bằng $x$.