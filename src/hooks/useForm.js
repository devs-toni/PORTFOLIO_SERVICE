import { useState } from 'react';
import { helpHttp } from '../helpers/helpHttp';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)

export const useForm = (initialForm) => {

  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    helpHttp().post('https://formsubmit.co/ajax/devs.toni@gmail.com', {
      body: form,
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      }
    }).then(res => {
      setLoading(false);
      setResponse(res);
      Toast.fire({
        icon: 'success',
        title: 'Email sent successfully!'
      })
      setTimeout(() => {
        setResponse(false)
      }, 5000);
      setForm(initialForm);
    })
  };

  const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  })

  return {
    form, errors, loading, response, handleChange, handleSubmit
  }
}
