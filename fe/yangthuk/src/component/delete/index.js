import { memo,useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const Delete = ({ onClose, onConfirm }) =>
{
    const [isVisible, setIsVisible] = useState(true);

    const handleCancel = () => {
        onClose();
        setIsVisible(false);
    };

    // Hàm xử lý khi nút "Delete" được click
    const handleDelete = () => {
        // Thực hiện hành động xóa
        onConfirm();

        // Đóng modal và cập nhật trạng thái
        onClose();
        setIsVisible(false);
    };

    // Nếu isVisible là false, không hiển thị component
    if (!isVisible) {
        return null;
    }
    return (
        <>
            <div className="modal" tabindex="-1">
            <div className="modal-dialog">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title">Modal title</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={handleCancel}></button>
                </div>
                <div className="modal-body">
                    <p>Bạn chắc chắn muốn xóa chứ?</p>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={handleCancel}>Cancel</button>
                    <button type="button" className="btn btn-primary" onClick={handleDelete}>Delete</button>
                </div>
                </div>
            </div>
            </div>
        </>
    )
};
export default memo(Delete);