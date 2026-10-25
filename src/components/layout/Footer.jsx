import { Container } from "../common/Container";

export function Footer() {
    return (
        <footer>
            <Container className="foot-grid">
                <div>
                    <h4>Ban Công Nghệ — BCN</h4>
                    <p>Cộng đồng sinh viên cùng học, cùng làm sản phẩm phần mềm.</p>
                </div>
                <div>
                    <h4>Khám phá</h4>
                    <p>
                        <a href="#huong-di">Bạn tò mò gì?</a>
                        <br />
                        <a href="#du-an">Dự án</a>
                        <br />
                        <a href="#noi-thang">Nói thật</a>
                        <br />
                        <a href="#faq">FAQ</a>
                    </p>
                </div>
                <div>
                    <h4>Kênh chính thức</h4>
                    <p>Sẽ liệt kê khi BCN cung cấp kênh đã xác nhận. Không dùng liên kết giả.</p>
                </div>
            </Container>
            <Container
                style={{
                    marginTop: "28px",
                    borderTop: "1px solid #333",
                    paddingTop: "18px",
                    fontSize: "13px",
                    color: "#888",
                }}
            >
                © Ban Công Nghệ · Sáng làm nền, đen làm khung và điểm nhấn, vàng mật ong làm dấu ấn.
            </Container>
        </footer>
    );
}
