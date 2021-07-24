import Swal from 'sweetalert2';

class Notification {
  handleNotification = (options: any) => {
    Swal.fire({
      icon: 'info',
      toast: true,
      position: 'top',
      showConfirmButton: false,
      timer: 3000,
      ...options,
    });
  };

  handleApiToast = ({ title, isSuccess, text }: any) => {
    this.handleNotification({
      position: 'top-end',
      icon: isSuccess ? 'success' : 'error',
      title,
      text,
    });
  };
}

export default new Notification();
