export const isLogin: () => boolean = () => {
  const isSuccess = localStorage.getItem('login') === 'success'
  return isSuccess
}