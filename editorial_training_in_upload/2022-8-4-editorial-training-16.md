---
layout: post
published: true
title: editorial training 16
date: 2022/08/4
tags: [CP]
---

## TICKET

#### subtask 1:

Dùng Floyd-Warshall để tính khoảng cách giữa mọi cặp đỉnh. 

ĐPT: $$O(n^3)$$.

#### subtask 2:

Coi các đỉnh thành một dãy $$g$$. Gọi $$f[i]$$ là chi phí di chuyển từ đỉnh vị trí $$1$$ đến đỉnh vị trí $$i$$ trên dãy. Với mỗi vị trí $$i$$, ta cần chọn $$1$$ vị trí $$j < i$$ sao cho $$f[i] - f[j] + 2 \times a[g[j]]$$ là nhỏ nhất. Việc này tương đương với tìm giá trị $$2 \times a[g[j]] - f[j]$$ nhỏ nhất. Làm tương tự từ cuối dãy về.

ĐPT: $$O(n)$$.

#### subtask 3:

Xét cây gốc $$1$$. Gọi $$dp[u]$$ là kết quả của đỉnh $$u$$ chỉ xét các đỉnh thuộc cây con gốc $$u$$. Khởi tạo $$dp[u] = a[u]$$. Với $$v, w$$ lần lượt là con trực tiếp của $$u$$ và trọng số cạnh $$(u-v)$$, ta có công thức: $$dp[u] = min(dp[u], dp[v] + 2 \times w)$$.

Nhờ công thức trên ta có thể sử dụng dp reroot để tính cho mọi gốc.

ĐPT: $$O(n)$$.

#### subtask 4:

Vì trọng số cạnh $$\le 1$$ nên ta có thể sử dụng [bfs 0/1](https://cp-algorithms.com/graph/01_bfs.html) để tính đường đi ngắn nhất giữa mọi cặp đỉnh.

ĐPT: $$O(n \times (n + m))$$.

#### subtask 5:

Sau khi gấp đôi trọng số cạnh, ta không cần quan tâm bước đi về nữa. Ta thêm cạnh đồ thị với đỉnh nguồn chính là một đỉnh ảo, ta nối đỉnh nguồn tới mọi đỉnh với chi phí là $$a[u]$$. Ta tìm đường đi ngắn nhất từ đỉnh nguồn tới mọi đỉnh là kết quả bài toán.

Đây là tư duy ngược khi làm các bài toán về đường đi ngắn nhất.

ĐPT: $$O(m \log(n))$$.

## WITHOUT CARRY

#### subtask 1:

Vì hệ cơ số $$2$$ nên ta có thể nói bài toán chỉ đơn giản là đếm số tập hợp con của một tập hợp. Dùng [DP SOS](https://codeforces.com/blog/entry/45223). 

ĐPT: $$O(20 \times n)$$.

#### subtask 2:

Trong hệ cơ số $$10$$ cũng hoàn toàn tương tự nếu bạn hiểu DP SOS.

[code](https://ideone.com/J4Vvtf).

ĐPT: $$O(6 \times n)$$.

## DIAMOND

#### subtask 1:

Ta chọn cạnh $$(u,v)$$ làm cạnh giữa của đồ thị kim cương. Việc còn lại là đếm số đỉnh kề chung của hai đỉnh $$u, v$$. Giả sử số đỉnh kề chung là $$cnt$$, ta thấy số đồ thị kim cương tạo ra là $$cnt \times (cnt - 1) / 2$$.

ĐPT: $$O(m \times n)$$.

#### subtask 2:

Ta cải tiến bằng bitset.

ĐPT: $$O(\frac{m \times n}{32})$$.

#### subtask 3:

Nhận thấy có thể ghép chung một số cạnh có cùng đỉnh $$u$$ với nhau để khỏi đánh dấu nhiều lần. Thực tế nếu vẫn làm trâu thì thời gian chạy còn tăng gấp đôi vì ta xét $$2$$ lần mỗi cạnh. Do đó ta cần một cách duyệt thông minh hơn.

Trong cạnh $$(u, v)$$, ta chỉ xét đỉnh đóng vai trò là đỉnh lớn (đỉnh có bậc lớn hơn trong hai đỉnh). Do tổng thời gian đánh dấu luôn là $$O(m)$$ nên thực tế, số đỉnh kề của đỉnh lớn không quan trọng. Thời gian chạy chỉ phụ thuộc vào độ lớn của đỉnh nhỏ. 

Để phân tích kĩ thời gian chạy hơn, ta gọi tổng lực lượng $$n$$ tập danh sách kề là $$S$$. Có $$m$$ truy vấn, ta cần quan tâm đến danh sách kề của một cặp đỉnh khác nhau. Thời gian chạy lớn nhất khi lực lượng mỗi tập là $$\frac{S}{n}$$. Số truy vấn tối là $$min(n^2, m)$$. Do đó thời gian chạy là $$A = \frac{S}{n} \times min(n^2, m)$$. 

Áp dụng bất đẳng thức $$min(a, b) \le \sqrt{a \times b}$$, ta có $$A \le \frac{S}{n} \times \sqrt{n^2 \times m})$$ tương đương với $$A \le S \times \sqrt{m}$$. Vì tập $$S$$ bằng $$2 \times m$$ nên ta được ĐPT thuật toán là $$O(m \times \sqrt{m})$$.

Với dạng bài `cho các tập hợp với lực lượng nhỏ và các truy vấn thao tác trên 2 tập`, ta có thể làm như trên.

[code](https://ideone.com/IAv5Vb).