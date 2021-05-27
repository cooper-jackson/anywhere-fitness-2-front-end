export default function ClassForm(props) {

    return (
        <form className='class-form container'>
            <div className='class-form inputs'>
                <label>Name
                    <input
                    type='text'
                    name='name'
                    />
                </label>

                <label>Type
                    <input
                    type='text'
                    name='type'
                    />
                </label>
                
                <label>Start Time
                    <input
                    type='text'
                    name='start'
                    />
                </label>

                <label>Duration
                    <input
                    type='text'
                    name='duration'
                    />
                </label>

                <label>Intensity level
                    <input
                    type='text'
                    name='level'
                    />
                </label>

                <label>Location
                    <input
                    type='text'
                    name='location'
                    />
                </label>

                <label>Max class size
                    <input
                    type='text'
                    name='size'
                    />
                </label>

                <label>Date
                    <input
                    type='text'
                    name='date'
                    />
                </label>
            </div>
        </form>
    )
}