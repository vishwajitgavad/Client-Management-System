import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useFormik } from "formik"
import { useDispatch, useSelector } from "react-redux"
import axios from "axios"
import * as yup from "yup"
import { registerUserAction } from '../redux/userAction'

const Register = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { registered } = useSelector(state => state.allUser)
    const initialValues = {
        name: "",
        email: "",
        password: "",
        cpassword: ""
    }
    const formik = useFormik({
        initialValues,
        validationSchema: yup.object({
            name: yup.string().required(true, "please Enter Name "),
            email: yup.string().required(true, "please enter Email").email(),
            password: yup.string().required(true, "please enter Password").min(3, "pleas enter min 3 character "),
            cpassword: yup.string().required().oneOf([yup.ref("password")], "Password Do Not Match"),
        }),
        onSubmit: async (values) => {
            console.log(values);
            dispatch(registerUserAction(values))
        }
    })
    useEffect(() => {
        if (registered) {
            navigate("/")
        }

    }, [registered])

    return (<>
        {JSON.stringify(formik.values)}
        {JSON.stringify(formik.errors)}
        <div class="container">
            <div class="row">
                <div class="col-sm-6 offset-sm-3">
                    <div class="card">
                        <div class="card-header">Signup</div>
                        <form onSubmit={formik.handleSubmit}>
                            <div class="card-body">
                                <div>
                                    <label for="name" class="form-label">First name</label>
                                    <input
                                        name='name'
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.name}
                                        class={formik.touched.name && formik.errors.name ? "form-control is-invalid" : "form-control"}
                                        type="text"
                                        id="name"
                                        placeholder="Enter your name"
                                    />
                                    <div class="valid-feedback">Looks good!</div>
                                    <div class="invalid-feedback">Please choose a username.</div>
                                </div>
                                <div class="mt-2">
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
                                        type="text"
                                        id="password"
                                        placeholder="Enter Your Password"
                                    />
                                    <div class="valid-feedback">Looks good!</div>
                                    <div class="invalid-feedback">Please choose a password.</div>
                                </div>
                                <div class="mt-2">
                                    <label for="cpassword" class="form-label"
                                    >Confirm Password</label
                                    >
                                    <input
                                        name='cpassword'
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.cpassword}
                                        class={formik.touched.cpassword && formik.errors.cpassword ? "form-control is-invalid" : "form-control"}
                                        type="text"
                                        id="cpassword"
                                        placeholder="Confirm Your Password"
                                    />
                                    <div class="valid-feedback">Looks good!</div>
                                    <div class="invalid-feedback">
                                        Please Recheck Your Password.
                                    </div>
                                </div>
                                <button type="submit" class="btn btn-primary w-100 mt-3">
                                    Signup
                                </button>
                                <p class="text-center mt-3">
                                    Already Have Account? <Link to={"/"}>Login</Link>
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

export default Register