import React from 'react'

const Work = () => (
    <div className="work">
        <form
            name="test"
            method="post"
            data-netlify-honeypot="bot-field"
            data-netlify="true">
            <input type="hidden" name="form-name" value="test" />
            <input type="text" name="word" />
            <button role="submit">send</button>
        </form>
    </div>
)

export default Work