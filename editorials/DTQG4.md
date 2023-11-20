---
layout: blog-post
title: "DTQG #4 Editorial"
date: '2023-11-20'
aside: false
sidebar: false
---

# Bài 1

Nếu tất cả các đỉnh có bậc chẵn, ta đi theo chu trình Euler là có thể tạo được đáp án. 

Nếu có chẵn đỉnh bậc lẻ, giả sử các đỉnh đó lần lượt là $v_1$, $v_2$, ..., $v_{2 \times k}$. Ta tạo cạnh ảo giữa đỉnh $v_{i}$ đến đỉnh $v_{i + 1}$. Lúc này đồ thị có toàn đỉnh bậc chẵn như trường hợp trên. Ta định hướng cạnh theo chu trình Euler trên đồ thị mới này. Tuy nhiên sự thật là chỉ có những đỉnh bậc chẵn ban đầu thoả mãn, chỉ in ra đáp án là số lượng đỉnh bậc chẵn ban đầu.

Lưu ý: có thể tồn tại nhiều tplt.

# Bài 2

Điều kiện đề bài "Đồ thị không có chu trình nào có độ dài chẵn đi qua mỗi cạnh nhiều nhất một lần" tương đương với "chỉ có chu trình lẻ && các chu trình đôi một không giao nhau".

Định lí: "đồ thị là đồ thị hai phía khi và chỉ khi không tồn tại chu trình lẻ".

Ta sẽ liệt kê các chu trình ra. Ta sẽ tìm chỉ số min và max của chu trình này. Các đoạn $[x, y]$ chứa $[min, max]$ sẽ không thoả mãn. Ta dùng segtree để đếm số cặp $[x, y]$ không chứa đoạn $[min, max]$ nào cả.

# Bài 3

Với mỗi phần tử của đoạn $[a, b]$, ta biết rằng nó sẽ có một cạnh tới mỗi phần tử trong đoạn $[c, d]$. Do đó ta nghĩ đến trick dùng segtree thể hiện cho cạnh đồ thị. Sau khi rời rạc hoá, chỉ có $O(n)$ đỉnh cần quan tâm.

Mỗi node trên segtree sẽ lưu tất cả các đoạn $[c, d]$ với ý nghĩa các phần tử thuộc node đó sẽ có cạnh đến mỗi phần tử trong đoạn $[c, d]$ này. Ta chỉ việc chia đoạn $[a, b]$ ra các đoạn trên segtree và thêm $[c, d]$ vào vector.

Sau khi có đồ thị, ta thực hiện việc bfs. Gọi đỉnh $u$ là đỉnh nhỏ nhất trong queue khi bfs. Ta sẽ xét mọi đoạn chứa đỉnh $u$ này. Di chuyển từ gốc xuống lá chứa $$u$ sẽ xét được mọi đoạn chứ $u$. 

Giả sử đang xét đoạn $[a, b]$ chứa $u$. Nếu đoạn $[a, b]$ đã được xét trước rồi thì ta bỏ qua, vì đường đi được xét trước đó sẽ tối ưu hơn. Nếu không ta sẽ duyệt qua vector của node $[a, b]$ này. Giả sử có đoạn $[c, d]$ trong vector. Ta sẽ lại chia đoạn $[c, d]$ ra làm các đoạn trên segtree như bình thường, rồi làm với từng đoạn con. Giả sử có đoạn con là $[c', d']$. Nếu đoạn con này được xét rồi thì ta bỏ qua, lí do tương tự như trên, nếu được xét rồi thì đường đi được xét trước đó sẽ tối ưu hơn. Nếu không ta duyệt đến nút lá $v$ của đoạn con này, chỉ khi nào mảng $dist[v] > dist[u] + 1$ thì ta mới cập nhật như bfs bình thường. 

Cách làm trên tưởng như có đpt lớn nhưng không phải. Việc rời rạc hoá các đỉnh cũng như đánh dấu đã xét rồi đã làm giảm thời gian chạy đi đáng kể. Biểu diễn đồ thị bằng segtree là ý tưởng cũ, từng xuất hiện tại bài VOI 2023. 