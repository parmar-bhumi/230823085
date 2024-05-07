import React from 'react'
function Task(props){
    return(
        <>
             <div>
                <table border="2">
                    <tbody>
                    <tr>Core 1</tr>
                    <tr>For the students admitted from A.Y.2021-2022 & onwards</tr>
                    <tr>
                        <td>Offering Department:
                            Computer science
                        </td>
                        <td>
                            Offered to:<b>B.sc.Information Technology</b>
                        </td>
                    </tr>
                    <tr>Semester-1</tr>
                    <tr>
                        <td>Course code</td>
                        <td>Course Title</td>
                        <td>Course Credit and Hours</td>
                    </tr>
                    <tr>
                        <td>21BITCC101</td>
                        <td>Fundamentals of Computer(F)</td>
                        <td>4 credits-4 hrs/wk</td>
                    </tr>
                    </tbody>
                </table>
            </div> 
        </>
    )
}

export default Task;
