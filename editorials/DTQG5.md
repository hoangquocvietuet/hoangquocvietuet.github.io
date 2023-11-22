---
layout: blog-post
title: "DTQG #5 Editorial"
date: '2023-11-22'
aside: false
sidebar: false
---

# Bài 1

Vì ta chỉ xét một đoạn liên tiếp, nên ta biết được rằng, các kí tự ngoặc đóng sẽ luôn match kí tự ngoặc mở gần nhất bên trái giống y như việc match khi xét cả xâu $S$. (nếu bài là subsequence sẽ không match được như vậy).

Với mỗi vị trí $i$, ta sẽ tìm vị trí $j$ sao cho $[j, i]$ match được một dãy ngoặc đúng. Khi đó ta sẽ coi dãy ngoặc này là một dãy ngoặc độc lập (không có dãy nào bao nó). Gọi $f[i]$ là đáp án khi xét dãy kết thúc tại $i$. Khi đó ta có lựa chọn là:

 - Lấy dãy $[j, i]$ hiện tại nối vào $f[j - 1]$.
 - Chỉ lấy dãy $[j, i]$.
 - Lấy dãy empty.

# Bài 2

Gọi $dp(j, i)$ là số dãy có hai phần tử cuối là $j$ và $i$. Với mọi $k$ sao cho $k \oplus j \oplus i \neq 0$, ta cập nhật $dp(i, j) = dp(i, j) + dp(k, j)$.

Làm như trên sẽ mất độ phức tạp là $O(n^3)$. Để cải tiến lên $O(n^2)$ thì ta thấy chỉ có duy nhất một $k = i \oplus j$ không thoả mãn. Do đó ta có thể cộng tổng hết $dp(k, j)$ và trừ đi $dp(i \oplus j, j)$.

Giờ ta sẽ giảm xuống chỉ còn một chiều: $dp(i)$ là số dãy có kết thúc là $i$. Với mọi $j < i$, ta thực hiện thao tác $dp(i) = dp(i) + dp(j) - dp(i \oplus j)$ nếu $i \oplus j < j$. Cách làm trên vẫn có độ phức tạp là $O(n^2)$ nhưng ta lại có thể cải tiến được. 

Thật vậy, ta lưu thêm mảng tổng tiền tố $prefDP(i)$ là tổng các $dp$ từ $0$ đến $i$. Lúc này $dp(i) = prefDP(i - 1)$. Việc cần làm bây giờ là nhóm hết những $dp(i \oplus j)$ thoả mãn $j < i, i \oplus j < j$ vào để trừ cho nhanh. 

Gọi bit cao nhất của $i$ là $k$. Ta thấy bit cao nhất của $j$ tối đa là $k$. Nếu bit thứ $k$ của $j$ là $0$, thì $i \oplus j > j$. Nếu bit thứ $k$ của $j$ là $1$ thì $i \oplus j < j$ (thoả mãn). Vậy ta sẽ chỉ trừ với những $j$ có bit cao nhất bằng bit cao nhất của $i$. Dù đã giảm được cơ số $j$ phải xét nhưng ta vẫn không thể lưu hoặc xét được mọi $i \oplus j$ được vì $i$ thay đổi cũng như có quá nhiều $j$. 

Giờ ta sẽ làm ngược một chút. Đặt $h = i \oplus j$. 
- Điều kiện đầu tiên là bit cao nhất của $h$ phải khác bit cao nhất của $i$ và $j$ (vì bit cao nhất của $i$ bằng bit cao nhất của $j$ => bit tại vị trí đó của $i \oplus j$ là $0$, khác $i$ và $j$).
- Điều kiện tiếp theo là $h \oplus i < i$. 

Ta sẽ trừ hết tất cả các $dp(h)$ thoả mãn như trên (tính đúng đắn được đảm bảo).

Làm ngược như vậy có tác dụng gì? Lúc này khi duyệt $i$ tăng dần, khi nào bit cao nhất của $i$ tăng lên một vị trí, ta mới đi cập nhật các $dp(h)$ trước đó. Ngoài ra điều kiện $h \oplus i < i$ sẽ dễ kiểm soát với $i$ là tham số hơn. Có thể dùng trie để trừ đi các $dp$ như trên.

# Bài 3

Có thể tóm gọn đề bài là tính diện tích lớn nhất của $1$ tplt. Pha tính phần diện tích hợp thì dễ, xử lí như bài [Area](https://oj.vnoi.info/problem/area). Giờ ta chỉ quan tâm pha DSU để hợp nhất các hcn thuộc một tplt.

Ta sẽ sweepline theo $x$ và merge những thằng có $y$ giao nhau. Lưu lại các đoạn theo $y$ trong vector trên các node của segtree. Khi merge thì ta chỉ việc lấy ra. Tuy nhiên nếu không có theo trick thì độ phức tạp sẽ rất lớn. Ta để ý là sau khi merge, chỉ cần lưu đúng 1 phần tử là đại diện được cho tplt. Ta sẽ lưu phần tử bị xoá cuối cùng khi sweepline. Lúc đó ta se có cơ hội merge càng nhiều.

Tuy sol ngắn nhưng code khá ảy chỉa. Các em [tự code](https://ideone.com/gQqTdN) nhé ;) 