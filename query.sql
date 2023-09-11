create table cliente(id int not null auto_increment primary key, cnpj varchar(18) not null unique, nome varchar(100) not null, data_fundacao date not null, tipo bool not null, telefone varchar(15) not null default '(00) 00000-0000', email varchar(45) not null);

create table endereco(id_cliente int not null, cep varchar(9) not null, logradouro varchar(100) not null, numero varchar(10) not null default 'SN', bairro varchar(45) not null, cidade varchar(100) not null, estado varchar(45) not null, foreign key(id_cliente) references cliente(id));

create table pessoa(id int not null auto_increment primary key, cpf varchar(14) not null unique, nome varchar(100) not null, data_nascimento date not null, telefone varchar(15) not null default '(00) 00000-0000', email varchar(45) not null);

create table pessoa_relacionada(id_pessoa int not null, id_cliente int not null, foreign key(id_pessoa) references pessoa(id), foreign key(id_cliente) references cliente(id));

create view vw_clientes as (
	select
		cliente.id, cliente.cnpj, cliente.nome, date_format(cliente.data_fundacao, '%d/%m/%Y') as data_fundacao, case when cliente.tipo = 0 then 'Regular' when cliente.tipo = 1 then 'Avulso' else 'Erro' end as 'tipo', cliente.telefone, cliente.email, endereco.cep, endereco.logradouro, endereco.numero, endereco.bairro, endereco.cidade, endereco.estado
    from cliente
    inner join endereco on
		cliente.id = endereco.id_cliente
    where cliente.id is not null
);

create view vw_pessoas as (
	select
		pessoa.id, pessoa.cpf, pessoa.nome, date_format(pessoa.data_nascimento, '%d/%m/%Y'), pessoa.telefone, pessoa.email, cliente.id as 'cliente.id', cliente.nome as 'cliente.nome'
	from pessoa
    left join pessoa_relacionada on pessoa_relacionada.id_pessoa = pessoa.id
    left join cliente on pessoa_relacionada.id_cliente = cliente.id
    where cliente.id is not null
);

DELIMITER //

CREATE PROCEDURE sp_insere_cliente(
	IN i_cnpj varchar(18),
    IN i_nome varchar(100),
    IN i_data_fundacao date,
    IN i_tipo tinyint(1),
    IN i_telefone varchar(15),
    IN i_email varchar(45),
    IN i_cep varchar(9),
    IN i_logradouro varchar(100),
	IN i_numero varchar(10),
    IN i_bairro varchar(45),
    IN i_cidade varchar(100),
    IN i_estado varchar(45)
)
BEGIN
    
    
    insert into cliente(
		cnpj, nome, data_fundacao, tipo, telefone, email
    ) values(
			i_cnpj, i_nome, i_data_fundacao, i_tipo, i_telefone, i_email
		);
        
	insert into endereco values(
		(select cliente.id from cliente order by cliente.id desc limit 1),
        i_cep,
        i_logradouro,
        i_numero,
        i_bairro,
        i_cidade,
        i_estado
    );
	
END //

DELIMITER ;

DELIMITER //

CREATE PROCEDURE sp_edita_cliente(
	IN i_id int,
	IN i_cnpj varchar(18),
    IN i_nome varchar(100),
    IN i_data_fundacao date,
    IN i_tipo tinyint(1),
    IN i_telefone varchar(15),
    IN i_email varchar(45),
    IN i_cep varchar(9),
    IN i_logradouro varchar(100),
	IN i_numero varchar(10),
    IN i_bairro varchar(45),
    IN i_cidade varchar(100),
    IN i_estado varchar(45)
)
BEGIN
    
    
    update cliente set
		cnpj = i_cnpj,
        nome = i_nome,
        data_fundacao = i_data_fundacao,
        tipo = i_tipo,
        telefone = i_telefone,
        email = i_email
	where cliente.id = i_id;
        
	update endereco set
		cep = i_cep,
        logradouro = i_logradouro,
        numero = i_numero,
        bairro = i_bairro,
        cidade = i_cidade,
        estado = i_estado
	where endereco.id_cliente = i_id;
	
END //

DELIMITER ;

DELIMITER //

CREATE PROCEDURE sp_deleta_cliente(
	IN i_id int
)
BEGIN
    
    delete from endereco where cliente_id = i_id;
    
    delete from cliente where cliente.id = i_id;
        
	
END //

DELIMITER ;

DELIMITER //

CREATE PROCEDURE sp_insere_pessoa(
	IN i_cpf varchar(14),
    IN i_nome varchar(100),
    IN i_data_nascimento date,
    IN i_telefone varchar(15),
    IN i_email varchar(45)
)
BEGIN
    
    
    insert into pessoa(
		cpf, nome, data_nascimento, telefone, email
    ) values(
			i_cpf, i_nome, i_data_nascimento, i_telefone, i_email
		);
	
END //

DELIMITER ;
