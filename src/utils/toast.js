import { toast } from 'react-toastify'

toast.configure()
export const notifySuccess = (msg) => {
  toast.success(msg,
    {
      position:toast.POSITION.TOP_RIGHT,
      autoClose:1500
    })
}

export const notifyError = (msg) => {
  toast.error(msg,
    {
      position:toast.POSITION.TOP_RIGHT,
      autoClose:1500
    })
}