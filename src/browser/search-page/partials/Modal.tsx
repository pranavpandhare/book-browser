import { Modal } from "@mui/material";

const style = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};


interface Props {
  image_url: string;
  open: boolean;
  onClose: () => void;
}

export default function BookModal({ image_url, open, onClose }: Props) {
  return (
    <Modal
      sx={style}
      open={ open }
      onClose={ onClose }
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <img
        src={ image_url }
        alt='cover'
        style={ { width: 'auto', height: 'auto' } }
      />
    </Modal>
  );
}