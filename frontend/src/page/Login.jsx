import { useFormik } from 'formik'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import * as yup from "yup"
import { userLoginAction } from '../redux/userAction'

const Login = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { auth } = useSelector(state => state.allUser)
    const initialValues = {
        email: "",
        password: ""
    }
    const formik = useFormik({
        initialValues,
        validationSchema: yup.object({
            email: yup.string().required(true, "please enter Email").email(),
            password: yup.string().required(true, "please enter Password")
            // password: yup.string().required(true, "please enter Password").min(3, "pleas enter min 3 character "),
        }),
        onSubmit: (values) => {
            // console.log(values);
            dispatch(userLoginAction(values))
        }
    })
    useEffect(() => {
        if (auth) {
            navigate("/dashboard")
        }
    }, [auth])
    return (<>
        <div class="container">
            <div class="row">
                <div class="col-sm-6 offset-sm-3">
                    <div class="card">
                        <div class="card-header">Login</div>
                        <form onSubmit={formik.handleSubmit} >
                            <div class="card-body">
                                <div>
                                    <label for="email" class="form-label">First Email</label>
                                    <input
                                        name='email'
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.email}
                                        class={formik.touched.email && formik.errors.email ? "form-control is-invalid" : "form-control"}
                                        type="text"
                                        id="email"
                                        placeholder="Enter Your Email"
                                    />
                                    <div class="valid-feedback">Looks good!</div>
                                    <div class="invalid-feedback">Please choose a username.</div>
                                </div>
                                <div class="mt-2">
                                    <label for="password" class="form-label">Password</label>
                                    <input
                                        name='password'
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.password}
                                        class={formik.touched.password && formik.errors.password ? "form-control is-invalid" : "form-control"}
                                        type="password"
                                        id="password"
                                        placeholder="Enter Your Password"
                                    />
                                    <div class="valid-feedback">Looks good!</div>
                                    <div class="invalid-feedback">Please choose a username.</div>
                                </div>
                                <button type="submit" class="btn btn-primary w-100 mt-3">
                                    Login
                                </button>
                                <p class="text-center mt-3">
                                    Dont Have Account? <Link to={"/register"}>Register</Link>
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </>
    )
}

export default Login