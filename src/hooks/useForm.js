import { useState } from 'react';
import { helpHttp } from '../helpers/helpHttp';


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
      console.log(res)
      setLoading(false);
      setResponse(res);
      setTimeout(() => {
        setResponse(false)
      }, 5000);
      setForm(initialForm);
    })
  };

  return {
    form, errors, loading, response, handleChange, handleSubmit
  }
}
