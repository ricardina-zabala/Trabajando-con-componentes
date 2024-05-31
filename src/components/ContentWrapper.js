import React from 'react';
import TopBar from './TopBar';
import ContentRowTop from './ContentRowTop';
import Footer from './Footer';
import { TableHead } from './TableHead';
import { TableRow } from './TableRow';
function ContentWrapper() {
    const metrics = [
        {
            show: true,
            title: 'Movies in Data Base',
            digit: 21,
            color: 'primary',
            icon: 'film',
        },
        {
            show: true,
            title: 'Total awards',
            digit: 79,
            color: 'success',
            icon: 'award',
        },
        {
            show: true,
            title: 'Actors quantity',
            digit: 49,
            color: 'warning',
            icon: 'user',
        }
    ]

    const movies = [
		{
			title: 'Billy Elliot',
			duration: '123',
			rating: 5,
			genre: ['Drama', 'Comedia'],
			awards: 2
		},
		{
			title: 'Alicia en el país de las maravillas',
			duration: '142',
			rating: 4.8,
			genre: ['Drama','Acción', 'Comedia'],
			awards: 3
		}
	];

    const dataTable = ['Título', 'Duración', 'Rating', 'Géneros', 'Premios']

    return (
        <React.Fragment>
            {/*<!-- Content Wrapper -->*/}
            <div id="content-wrapper" className="d-flex flex-column">
                {/*<!-- Main Content -->*/}
                <div id="content">
                    <TopBar />

                    <ContentRowTop data={metrics} />

                    <table class="table table-bordered">
                        <TableHead items ={dataTable}/>
                        <tbody>
                            {
                                movies.map((movie, i) => {
                                    return <TableRow key={i} {... movie} />
                                })
                            }
                        </tbody>
                        <TableHead items ={dataTable}/>
                    </table>

                    <Footer />
                </div>
            </div>
        </React.Fragment>
    )
}
export default ContentWrapper;